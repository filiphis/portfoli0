import * as S from "./styles";

export type TitleProps = {
  children: string;
};

export default function Title({ children }: TitleProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
