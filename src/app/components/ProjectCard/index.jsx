import Image from "next/image";
import * as S from "./styles";
import Title from "../Title";

export default function ProjectCard() {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <Image
          src="https://source.unsplash.com/featured/375x260"
          width={340}
          height={214}
          // fill
          alt="imagem"
        />
        <Title fontSize="cardTitle">Titulo do projeto</Title>
      </S.ImageContainer>
    </S.Wrapper>
  );
}
