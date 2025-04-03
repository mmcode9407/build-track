import { LucideCalendar } from "lucide-react";

import { useProjectQuery } from "@/api/project/useProjectQuery";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/Button/Button";
import { Typography } from "@/components/ui/Typography/Typography";
import { useAuth } from "@/context/AuthContext/AuthContext";

import * as S from "./Project.styled";
import { ProjectItem } from "./ProjectItem";

const Project = () => {
  const { user } = useAuth();
  const {
    data: projects,
    isLoading,
    isSuccess,
  } = useProjectQuery(user?.id, {
    enabled: !!user,
  });

  return (
    <S.Section>
      <S.SectionHeader>
        <S.SectionTitle>
          <LucideCalendar />

          <Typography tag="h1" variant="title-md">
            My projects
          </Typography>
        </S.SectionTitle>

        <Button>Create new project</Button>
      </S.SectionHeader>

      {isLoading && <Spinner />}

      {isSuccess && projects.length > 0 && (
        <S.ProjectsList>
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </S.ProjectsList>
      )}

      {isSuccess && projects.length === 0 && (
        <Placeholder label="No projects yet" />
      )}
    </S.Section>
  );
};

export { Project };
