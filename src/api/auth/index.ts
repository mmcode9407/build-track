import { authMutations } from "./auth.mutations";

export const mutations = {
  ...authMutations,
} as const;

export type SupabaseMutationsType = keyof typeof mutations;
