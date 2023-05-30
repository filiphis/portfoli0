import * as S from "./styles";

export type TitleProps = {
  children: string;
  align?: "left" | "center";
};

export default function Title({ children, align = "left" }: TitleProps) {
  return <S.Wrapper align={align}>{children}</S.Wrapper>;
}
