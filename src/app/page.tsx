// import { GlobalStyles } from "./styles/global.styles.ts";
// import styles from "./page.module.css";
"use client";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Project, myProjects } from "./api/getProjects";

export const metadata = {
  title: "Portfolio Luiz Silveira",
  description:
    "Portfolio de um desenvolvedor Front End que utiliza as tecnologias: HTML, CSS, JavaScript, React, TypeScript, NextJS, StoryBook, Styled Component, Tailwind e outras...",
};

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    async function getData() {
      // const username = "filiphis";
      // const repo = "alura-space";

      // const result = await getImageUrl(username, repo);
      // console.log(result);

      const username = "filiphis";
      const repo = "alura-space";

      const result = await myProjects(username);
      const teste: Project[] = await result;

      setProjects(result);
      console.log(result);
    }
    getData();
  }, []);

  return (
    <main>
      <Banner />
      <Experience />
      <Projects projects={projects} />
    </main>
  );
}
