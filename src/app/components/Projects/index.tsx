import SubTitle from "../SubTitle";
import Title from "../Title";
import ProjectCard from "../ProjectCard";
import * as S from "./styles";

export default function Projects() {
  return (
    <S.Wrapper>
      <Title fontSize="title">Projetos</Title>
      <SubTitle>O que desenvolvi até agora:</SubTitle>

      <S.Projects>
        <ProjectCard />
        <ProjectCard />
      </S.Projects>
    </S.Wrapper>
  );
}
