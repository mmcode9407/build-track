import { LucideCalendar } from "lucide-react";

import { useUserQuery } from "@/api/auth/useUserQuery";
import { useProjectQuery } from "@/api/project/useProjectQuery";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Button } from "@/components/ui/Button/Button";
import { Typography } from "@/components/ui/Typography/Typography";

import * as S from "./Project.styled";
import { ProjectItem } from "./ProjectItem";

const Project = () => {
  const { data: user } = useUserQuery();
  const { data: projects } = useProjectQuery(user?.id);

  return (
    <S.Section>
      <S.SectionHeader>
        <S.SectionTitle>
          <LucideCalendar />

          <Typography variant="h4">My projects</Typography>
        </S.SectionTitle>

        <Button>Create new project</Button>
      </S.SectionHeader>

      {projects && projects.length ? (
        <S.ProjectsList>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </S.ProjectsList>
      ) : (
        <Placeholder label="No projects yet" />
      )}
    </S.Section>
  );
};

export { Project };
