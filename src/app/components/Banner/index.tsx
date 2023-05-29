import Paragraph from "../Paragraph";
import Title from "../Title";
import * as S from "./styles";
import Image from "next/image";
import minhaFoto from "/public/minha-foto.jpg";

export default function Banner() {
  return (
    <S.Wrapper>
      <S.ImagemContainer>
        <Image src={minhaFoto} alt="minha foto" fill priority />
      </S.ImagemContainer>
      <Title>Prazer em conhece-lo!</Title>
      <Title>Eu me chamo Luiz.</Title>

      <Paragraph>
        2023 is here, and website accessibility widget is not just an option, it
        should be a business priority that gives your website a real competitive
        advantage.
      </Paragraph>
      <Paragraph>
        Fact: 71% of people with disabilities will leave an inaccessible website
        within 10 seconds. With these stats, the decision is clear: your
        business website can’t afford to lose traffic and potential clients!
      </Paragraph>
    </S.Wrapper>
  );
}
