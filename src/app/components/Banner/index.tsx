import Paragraph from "../Paragraph";
import Title from "../Title";
import * as S from "./styles";
import Image from "next/image";
import minhaFoto from "/public/minha-foto.png";
import { Separator } from "@/app/styles/Separator";

export default function Banner() {
  return (
    <S.Wrapper>
      <S.ImagemContainer>
        <Image src={minhaFoto} alt="minha foto" fill priority sizes="500px" />
      </S.ImagemContainer>

      <Separator>
        <Title align="center">Prazer em conhece-lo!</Title>
        <Title align="center">Eu me chamo Luiz.</Title>
      </Separator>

      <Separator>
        <Paragraph>
          Atualmente trabalho como analista de suporte na empresa
          Linx/Setadigital. Trabalho como analista de suporte a quatro anos e
          pretendo migrar para a area de desenvolvimento.
        </Paragraph>
        <Paragraph>
          Possuo conhecimentos em HTML, CSS, Javascript, TypeScript, React,
          Next, Styled Components, StoryBook e testes.
        </Paragraph>
        <Paragraph>
          Tenho um bom conhecimento pratico com HTML e CSS, consigo desenvolver
          interfaces utilizando HTML, CSS, Flexbox e Grid tranquilamente.
        </Paragraph>
        <Paragraph>
          Meus conhecimentos em React, Node e TypeScript não são muito
          avançados, mas consigo desenvolver componentes/interfaces e realizar
          requisições para api's tranquilamente.
        </Paragraph>
      </Separator>
    </S.Wrapper>
  );
}
