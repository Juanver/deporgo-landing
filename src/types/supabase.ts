export interface League {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  color_primary: string;
  color_secondary: string;
  admin_id: string | null;
  created_at: string;
}

export interface Sponsor {
  id: string;
  league_id: string;
  name: string;
  image_url: string | null;
  link_url: string | null;
  created_at: string;
}

export interface Tournament {
  id: string;
  league_id: string;
  name: string;
  is_active: boolean;
  created_at: string;
}

export interface Team {
  id: string;
  league_id: string;
  name: string;
  shield_url: string | null;
  created_at: string;
}

export interface StandingRow {
  tournament_id: string;
  team_id: string;
  team_name: string;
  shield_url: string | null;
  league_id: string;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
  dg: number;
  puntos: number;
}

export interface MatchTeam {
  id: string;
  name: string;
  shield_url: string | null;
}

export interface Match {
  id: string;
  tournament_id: string;
  home_score: number | null;
  away_score: number | null;
  match_date: string;
  round_number: number;
  status: "pending" | "finished";
  home_team: MatchTeam;
  away_team: MatchTeam;
}

export interface TopScorer {
  id: string;
  tournament_id: string;
  player_name: string;
  goals: number;
  team: MatchTeam;
}

export interface PublicLeaguePageData {
  league: League;
  sponsors: Sponsor[];
  tournaments: Tournament[];
  activeTournament: Tournament | null;
  standings: StandingRow[];
  matchesByRound: Array<{
    roundNumber: number;
    matches: Match[];
  }>;
  topScorers: TopScorer[];
}
