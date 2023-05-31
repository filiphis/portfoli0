"use client";
import * as S from "./styles";
import Image from "next/image";

import githubIcon from "/public/github.png";
import linkedinIcon from "/public/linkedin.png";
import Link from "next/link";

export default function Footer() {
  return (
    <S.Wrapper>
      <S.SocialsContainer>
        <S.Logo>DEV Luiz </S.Logo>

        <S.Socials>
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
          <Link href="https://github.com/filiphis" target="_blank">
            <Image
              src={githubIcon}
              alt="Icone do GitHub"
              width={30}
              height={30}
              priority
            />
          </Link>
        </S.Socials>
      </S.SocialsContainer>

      <S.Contacts>
        <a
          href="https://web.whatsapp.com/send?phone=5545999355912"
          target="_blank"
        >
          +55 45 9 9935 5912
        </a>
        <a href="mailto:l.filiphis@hotmail.com">l.filiphis@hotmail.com</a>
      </S.Contacts>
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
