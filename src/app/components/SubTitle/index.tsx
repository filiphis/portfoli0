"use client";
import * as S from "./styles";

export type SubTitleProps = {
  children: string;
};

export default function SubTitle({ children }: SubTitleProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
