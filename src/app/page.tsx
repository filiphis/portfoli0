// import { GlobalStyles } from "./styles/global.styles.ts";
// import styles from "./page.module.css";

import Banner from "./components/Banner";

export const metadata = {
  title: "Portfolio Luiz Silveira",
  description:
    "Portfolio de um desenvolvedor Front End que utiliza as tecnologias: HTML, CSS, JavaScript, React, TypeScript, NextJS, StoryBook, Styled Component, Tailwind e outras...",
};

export default function Home() {
  return (
    <main>
      <Banner />
    </main>
  );
}
