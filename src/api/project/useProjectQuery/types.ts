import type { QueryData } from "@supabase/supabase-js";

import type { projectsWithExpensesPriceQuery } from "./queries";

export type ProjectsWithExpensesPrice = QueryData<
  typeof projectsWithExpensesPriceQuery
>;
