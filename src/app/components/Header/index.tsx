"use client";
import * as S from "./styles";
import Image from "next/image";

import githubIcon from "/public/github.png";
import linkedinIcon from "/public/linkedin.png";
import sunIcon from "/public/dark.png";
import Link from "next/link";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Logo>DEV Luiz </S.Logo>
      <S.Socials>
        <Link href="https://github.com/filiphis" target="_blank">
          <Image
            src={githubIcon}
            alt="Icone do GitHub"
            width={30}
            height={30}
            priority
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/luiz-silveira-front-end/"
          target="_blank"
        >
          <Image
            src={linkedinIcon}
            alt="Icone do LinkedIn"
            width={30}
            height={30}
            priority
          />
        </Link>
      </S.Socials>
      {/* <Image
        src={sunIcon}
        alt="Icone do LinkedIn"
        width={30}
        height={30}
        priority
      /> */}
    </S.Wrapper>
  );
}
