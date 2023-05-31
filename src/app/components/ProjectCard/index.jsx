import Image from "next/image";
import * as S from "./styles";
import Title from "../Title";
import Link from "next/link";
import githubCardIcon from "/public/images/icons/github-card.svg";
import LinkCardIcon from "/public/images/icons/link-card.svg";

export default function ProjectCard() {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <Image
          src="https://source.unsplash.com/featured/375x260"
          width={340}
          height={214}
          priority
          alt="imagem"
        />
      </S.ImageContainer>
      <S.ContentContainer>
        <Title fontSize="cardTitle" align="left">
          Titulo do projeto
        </Title>
        <S.Technologies>
          <S.Tech>HTML</S.Tech>
          <S.Tech>CSS</S.Tech>
        </S.Technologies>

        <S.ProjectLinks>
          <Link href="#" target="_blank">
            <Image
              src={LinkCardIcon}
              width={20}
              height={20}
              alt="Ícone do Linkedin"
            />{" "}
            Projeto
          </Link>
          <Link href="https://github.com/filiphis" target="_blank">
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
