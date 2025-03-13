import { LucideCircleCheck, LucideInfo, LucideTimer } from "lucide-react";

export type StatusType = "PENDING" | "IN_PROGRESS" | "COMPLETED";

export const STATUS_ICONS: Record<StatusType, React.ReactElement> = {
  PENDING: <LucideTimer />,
  IN_PROGRESS: <LucideInfo />,
  COMPLETED: <LucideCircleCheck />,
};

export const STATUS_LABELS: Record<StatusType, string> = {
  PENDING: "Pending",
  IN_PROGRESS: "In progress",
  COMPLETED: "Completed",
};
