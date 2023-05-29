import * as S from "./styles";

export type ParagraphProps = {
  children: string;
};

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <div>
      <S.Wrapper>{children}</S.Wrapper>
    </div>
  );
}
