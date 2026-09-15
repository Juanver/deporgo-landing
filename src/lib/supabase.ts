import { createClient } from "@supabase/supabase-js";
import type {
  League,
  Match,
  MatchTeam,
  PublicLeaguePageData,
  Sponsor,
  StandingRow,
  TopScorer,
  Tournament,
} from "@/types/supabase";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase public environment variables.");
}

export class LeagueNotFoundError extends Error {
  constructor(slug: string) {
    super(`No se encontró la liga con slug \"${slug}\".`);
    this.name = "LeagueNotFoundError";
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

type MatchRow = Omit<Match, "home_team" | "away_team"> & {
  home_team: MatchTeam[] | MatchTeam | null;
  away_team: MatchTeam[] | MatchTeam | null;
};

type TopScorerRow = Omit<TopScorer, "team"> & {
  team: MatchTeam[] | MatchTeam | null;
};

const normalizeRelation = (relation: MatchTeam[] | MatchTeam | null): MatchTeam => {
  if (Array.isArray(relation)) {
    return relation[0] ?? { id: "", name: "Equipo", shield_url: null };
  }

  return relation ?? { id: "", name: "Equipo", shield_url: null };
};

export const getPublicLeaguePageData = async (
  slug: string,
): Promise<PublicLeaguePageData> => {
  const { data: league, error: leagueError } = await supabase
    .from("leagues")
    .select("*")
    .eq("slug", slug)
    .single<League>();

  if (leagueError || !league) {
    throw leagueError ?? new LeagueNotFoundError(slug);
  }

  const [{ data: sponsors, error: sponsorsError }, { data: tournaments, error: tournamentsError }] =
    await Promise.all([
      supabase
        .from("sponsors")
        .select("*")
        .eq("league_id", league.id)
        .order("name", { ascending: true }),
      supabase
        .from("tournaments")
        .select("*")
        .eq("league_id", league.id)
        .order("is_active", { ascending: false })
        .order("created_at", { ascending: false }),
    ]);

  if (sponsorsError) throw sponsorsError;
  if (tournamentsError) throw tournamentsError;

  const activeTournament =
    tournaments?.find((tournament) => tournament.is_active) ?? tournaments?.[0] ?? null;

  if (!activeTournament) {
    return {
      league,
      sponsors: sponsors ?? [],
      tournaments: tournaments ?? [],
      activeTournament: null,
      standings: [],
      matchesByRound: [],
      topScorers: [],
    };
  }

  const [{ data: standings, error: standingsError }, { data: matches, error: matchesError }, { data: topScorers, error: topScorersError }] =
    await Promise.all([
      supabase
        .from("standings")
        .select("*")
        .eq("tournament_id", activeTournament.id)
        .order("puntos", { ascending: false })
        .order("dg", { ascending: false })
        .order("gf", { ascending: false })
        .order("team_name", { ascending: true }),
      supabase
        .from("matches")
        .select(
          `
            id,
            tournament_id,
            home_score,
            away_score,
            match_date,
            round_number,
            status,
            home_team:teams!matches_home_team_id_fkey(id, name, shield_url),
            away_team:teams!matches_away_team_id_fkey(id, name, shield_url)
          `,
        )
        .eq("tournament_id", activeTournament.id)
        .order("round_number", { ascending: true })
        .order("match_date", { ascending: true }),
      supabase
        .from("top_scorers")
        .select(
          `
            id,
            tournament_id,
            player_name,
            goals,
            team:teams!top_scorers_team_id_fkey(id, name, shield_url)
          `,
        )
        .eq("tournament_id", activeTournament.id)
        .order("goals", { ascending: false })
        .order("player_name", { ascending: true })
        .limit(10),
    ]);

  if (standingsError) throw standingsError;
  if (matchesError) throw matchesError;
  if (topScorersError) throw topScorersError;

  const normalizedMatches: Match[] = ((matches ?? []) as MatchRow[]).map((match) => ({
    ...match,
    home_team: normalizeRelation(match.home_team),
    away_team: normalizeRelation(match.away_team),
  }));

  const normalizedTopScorers: TopScorer[] = ((topScorers ?? []) as TopScorerRow[]).map((scorer) => ({
    ...scorer,
    team: normalizeRelation(scorer.team),
  }));

  const groupedMatches = normalizedMatches.reduce<Map<number, Match[]>>((accumulator, match) => {
    const currentRoundMatches = accumulator.get(match.round_number) ?? [];
    currentRoundMatches.push(match);
    accumulator.set(match.round_number, currentRoundMatches);
    return accumulator;
  }, new Map());

  const matchesByRound = Array.from(groupedMatches.entries()).map(([roundNumber, roundMatches]) => ({
    roundNumber,
    matches: roundMatches,
  }));

  return {
    league,
    sponsors: (sponsors ?? []) as Sponsor[],
    tournaments: (tournaments ?? []) as Tournament[],
    activeTournament,
    standings: (standings ?? []) as StandingRow[],
    matchesByRound,
    topScorers: normalizedTopScorers,
  };
};
