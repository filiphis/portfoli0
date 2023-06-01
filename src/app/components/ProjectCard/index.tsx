import Image from "next/image";
import * as S from "./styles";
import Title from "../Title";
import Link from "next/link";
import githubCardIcon from "/public/images/icons/github-card.svg";
import LinkCardIcon from "/public/images/icons/link-card.svg";
import { Project } from "../../api/getProjects";

export default function ProjectCard({
  homepage,
  html_url,
  image_url,
  name,
  owner,
  title,
  topics,
  languages,
}: Project) {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <Image src={image_url} width={340} height={214} priority alt="imagem" />
      </S.ImageContainer>
      <S.ContentContainer>
        <Title fontSize="cardTitle" align="left">
          {title}
        </Title>
        <S.Technologies>
          {languages.map((lang) => (
            <S.Tech key={lang}>{lang.toUpperCase()}</S.Tech>
          ))}
        </S.Technologies>

        <S.ProjectLinks>
          <Link href={homepage} target="_blank">
            <Image
              src={LinkCardIcon}
              width={20}
              height={20}
              alt="Ícone de uma corrente, representando um link."
            />{" "}
            Projeto
          </Link>
          <Link href={html_url} target="_blank">
            <Image
              src={githubCardIcon}
              width={20}
              height={20}
              alt="Ícone do Github"
            />{" "}
            Código
          </Link>
        </S.ProjectLinks>
      </S.ContentContainer>
    </S.Wrapper>
  );
}
