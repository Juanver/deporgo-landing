export interface Client {
  name: string;
  initials: string;
  img?: string;
  status: string;
}

export const clients: Client[] = [
  {
    name: "Little Panda FC",
    initials: "LP",
    img: "https://vrcclvbagevufvcyeipw.supabase.co/storage/v1/object/sign/deporgo/logos/little-panda.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iMDZiOTkzZS1hNGMwLTQwMmEtODliMS1iZWE2NzcwMTc2ZWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkZXBvcmdvL2xvZ29zL2xpdHRsZS1wYW5kYS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3MDI1NTY2LCJleHAiOjE4MTg1NjE1NjZ9.GEYBxQ26GgdF_iWk0aWxoVCiiWT7PuBSb3qCt4Tg0ho",
    status: "Cliente activo",
  },
  {
    name: "Pancho Pichangas",
    initials: "PP",
    status: "Cliente activo",
  },
];
