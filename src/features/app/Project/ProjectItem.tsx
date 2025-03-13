import { LucideArrowRight, LucideCalendar, LucideHome } from "lucide-react";

import { StatusBadge } from "@/components/StatusBadge/StatusBadge";
import * as SCard from "@/components/ui/Card/Card.styled";
import * as SLink from "@/components/ui/Link/Link.styled";
import { Progress } from "@/components/ui/Progress/Progress";
import { Separator } from "@/components/ui/Separator/Separator.styled";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./ProjectItem.styled";

const ProjectItem = () => {
  return (
    <li>
      <SCard.Card>
        <SCard.CardHeader>
          <S.StatusBox>
            <LucideHome />

            <StatusBadge status="COMPLETED" />
          </S.StatusBox>

          <Typography variant="subtitle-2">Dom HK-79</Typography>

          <Typography variant="caption">Budowa domu HK-79</Typography>
        </SCard.CardHeader>

        <SCard.CardContent>
          <S.ProgressBox>
            <S.ProgressLabel>
              <Typography variant="caption" color="mutedForeground">
                Budget usage
              </Typography>

              <Typography variant="caption" color="mutedForeground">
                60%
              </Typography>
            </S.ProgressLabel>

            <Progress value={60} />
          </S.ProgressBox>

          <S.TargetPriceBox>
            <Typography variant="body-2">$375,000</Typography>

            <Typography variant="caption" color="mutedForeground">
              target
            </Typography>
          </S.TargetPriceBox>

          <S.TargetDateBox>
            <S.IconBox>
              <LucideCalendar />
            </S.IconBox>

            <Typography variant="caption" color="mutedForeground">
              Target date: Dec 2024
            </Typography>
          </S.TargetDateBox>
        </SCard.CardContent>

        <Separator />

        <SCard.CardFooter $center>
          <SLink.Link $withIcon>
            View Details <LucideArrowRight />
          </SLink.Link>
        </SCard.CardFooter>
      </SCard.Card>
    </li>
  );
};

export { ProjectItem };
