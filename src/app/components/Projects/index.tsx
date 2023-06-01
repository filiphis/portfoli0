import SubTitle from "../SubTitle";
import Title from "../Title";
import ProjectCard from "../ProjectCard";
import * as S from "./styles";
import { Project } from "@/app/api/getProjects";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <S.Wrapper>
        <Title fontSize="title">Projetos</Title>
        <SubTitle>O que desenvolvi até agora:</SubTitle>

        <S.Projects>
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </S.Projects>
      </S.Wrapper>
    </>
  );
}
