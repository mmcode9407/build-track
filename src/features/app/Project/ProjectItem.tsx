import { LucideArrowRight, LucideCalendar, LucideHome } from "lucide-react";
import { useMemo } from "react";

import type { ProjectsWithExpensesPrice } from "@/api/project/useProjectQuery";
import { StatusBadge } from "@/components/StatusBadge/StatusBadge";
import * as SCard from "@/components/ui/Card/Card.styled";
import * as SLink from "@/components/ui/Link/Link.styled";
import { Progress } from "@/components/ui/Progress/Progress";
import { Separator } from "@/components/ui/Separator/Separator.styled";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./ProjectItem.styled";

type ProjectItemProps = ProjectsWithExpensesPrice[number];

const ProjectItem = ({ ...project }: ProjectItemProps) => {
  const totalExpensesPrice = useMemo(
    () => project.expenses.reduce((sum, expense) => sum + expense.price, 0),
    [project],
  );

  const budgetUsage = parseInt(
    ((totalExpensesPrice / project.budget) * 100).toFixed(),
  );

  return (
    <S.ProjectItem>
      <SCard.Card>
        <SCard.CardHeader>
          <S.StatusBox>
            <LucideHome />

            <StatusBadge status={project.status} />
          </S.StatusBox>

          <Typography variant="subtitle-2">{project.name}</Typography>

          <Typography variant="caption">{project.description}</Typography>
        </SCard.CardHeader>

        <SCard.CardContent>
          <S.ProgressBox>
            <S.ProgressLabel>
              <Typography variant="caption" color="mutedForeground">
                Budget usage
              </Typography>

              <Typography variant="caption" color="mutedForeground">
                {budgetUsage}%
              </Typography>
            </S.ProgressLabel>

            <Progress value={budgetUsage} />
          </S.ProgressBox>

          <S.TargetPriceBox>
            <Typography variant="body-2">${project.budget}</Typography>

            <Typography variant="caption" color="mutedForeground">
              target
            </Typography>
          </S.TargetPriceBox>

          <S.TargetDateBox>
            <S.IconBox>
              <LucideCalendar />
            </S.IconBox>

            <Typography variant="caption" color="mutedForeground">
              Target date: {project.target_date}
            </Typography>
          </S.TargetDateBox>
        </SCard.CardContent>

        <Separator />

        <SCard.CardFooter $center>
          <SLink.Link to={`project/${project.id}`} $withIcon>
            View Details <LucideArrowRight />
          </SLink.Link>
        </SCard.CardFooter>
      </SCard.Card>
    </S.ProjectItem>
  );
};

export { ProjectItem };
