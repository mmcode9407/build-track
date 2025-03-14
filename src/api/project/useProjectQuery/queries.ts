import { supabaseClient } from "@/libs/supabase/supabaseClient";

export const projectsWithExpensesPriceQuery = supabaseClient
  .from("projects")
  .select("*, expenses(price)");
