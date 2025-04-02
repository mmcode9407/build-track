import type { UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

import { projectsWithExpensesPriceQuery } from "@/api/project/useProjectQuery/queries";
import type { ProjectsWithExpensesPrice } from "@/api/project/useProjectQuery/types";

import { tags } from "./tags";

const getProjectsList = async (
  userId?: string,
): Promise<ProjectsWithExpensesPrice> => {
  if (!userId) {
    throw new Error("No userId provided");
  }

  const { data, error } = await projectsWithExpensesPriceQuery.eq(
    "user_id",
    userId,
  );

  if (error) {
    throw error;
  }

  return data;
};

export const useProjectQuery = (
  userId?: string,
  options?: Omit<
    UseQueryOptions<ProjectsWithExpensesPrice, Error>,
    "queryKey" | "queryFn"
  >,
) =>
  useQuery<ProjectsWithExpensesPrice>({
    queryKey: [tags.GET_PROJECTS_LIST, userId],
    queryFn: () => getProjectsList(userId),
    ...options,
  });
