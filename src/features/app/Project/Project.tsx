import { LucideCalendar } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./Project.styled";
import { ProjectItem } from "./ProjectItem";

const Project = () => {
  return (
    <S.Section>
      <S.SectionHeader>
        <S.SectionTitle>
          <LucideCalendar />

          <Typography variant="h4">My projects</Typography>
        </S.SectionTitle>

        <Button>Create new project</Button>
      </S.SectionHeader>

      <S.ProjectsList>
        {Array.from({ length: 9 }).map((_, idx) => (
          <ProjectItem key={idx} />
        ))}
      </S.ProjectsList>
    </S.Section>
  );
};

export { Project };
