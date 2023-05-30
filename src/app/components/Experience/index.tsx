import Image from "next/image";
import SubTitle from "../SubTitle";
import Title from "../Title";
import * as S from "./styles";

import htmlIcon from "/public/images/icons/html-icon.svg";
import cssIcon from "/public/images/icons/css-icon.svg";
import jsIcon from "/public/images/icons/js-icon.svg";
import reactIcon from "/public/images/icons/react-icon.svg";
import typescriptIcon from "/public/images/icons/typescript-icon.svg";
import nodeIcon from "/public/images/icons/nodejs-icon.svg";
import githubIcon from "/public/images/icons/github-icon.svg";
import postgresIcon from "/public/images/icons/postgresql-icon.svg";
import sassIcon from "/public/images/icons/sass.svg";
import tailwindIcon from "/public/images/icons/tailwind-icon.svg";

export default function Experience() {
  return (
    <S.Wrapper>
      <Title>Experiências</Title>
      <SubTitle>Tecnologias que tenho trabalhado recentemente:</SubTitle>
      <S.Content>
        <Image src={htmlIcon} alt="Icone do HTML" width={70} />
        <Image src={cssIcon} alt="Icone do CSS" width={70} />
        <Image src={jsIcon} alt="Icone do Javascrip" width={70} />
        <Image src={reactIcon} alt="Icone do React" width={70} />
        <Image src={typescriptIcon} alt="Icone do TypeScript" width={70} />
        <Image src={nodeIcon} alt="Icone do NodeJS" width={70} />
        <Image src={postgresIcon} alt="Icone do PostgreSQL" width={70} />
        <Image src={sassIcon} alt="Icone do Sass" width={70} />
        <Image src={tailwindIcon} alt="Icone do Tailwind" width={70} />
        <Image src={githubIcon} alt="Icone do Github" width={70} />
      </S.Content>
    </S.Wrapper>
  );
}
