import SubTitle from "../SubTitle";
import Title from "../Title";
import ProjectCard from "../ProjectCard";
import * as S from "./styles";
import { Project } from "@/app/api/getProjects";
import { useState } from "react";

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
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))
          ) : (
            <SubTitle>Buscando projetos....</SubTitle>
          )}
        </S.Projects>
      </S.Wrapper>
    </>
  );
}
