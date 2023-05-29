"use client";
import * as S from "./styles";
import Image from "next/image";

import githubIcon from "/public/github.png";
import linkedinIcon from "/public/linkedin.png";
import sunIcon from "/public/dark.png";

import { Big_Shoulders_Display } from "next/font/google";
const bigShouldersFont = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

export default function Header() {
  return (
    <S.Wrapper>
      <S.Logo>DEV Luiz </S.Logo>
      <S.Socials>
        <Image
          src={githubIcon}
          alt="Icone do GitHub"
          width={30}
          height={30}
          priority
        />
        <Image
          src={linkedinIcon}
          alt="Icone do LinkedIn"
          width={30}
          height={30}
          priority
        />
      </S.Socials>
      <Image
        src={sunIcon}
        alt="Icone do LinkedIn"
        width={30}
        height={30}
        priority
      />
    </S.Wrapper>
  );
}
