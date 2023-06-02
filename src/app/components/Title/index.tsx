import { ReactNode } from "react";
import * as S from "./styles";

export type TitleProps = {
  children: ReactNode;
  align?: "left" | "center";
  fontSize?: "title" | "subtitle" | "cardTitle";
};

export default function Title({
  children,
  align = "left",
  fontSize = "title",
}: TitleProps) {
  return (
    <S.Wrapper fontSize={fontSize} align={align}>
      {children}
    </S.Wrapper>
  );
}
