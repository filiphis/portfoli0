"use client";
// import './globals.css'
import { Inter } from "next/font/google";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pt-br">
        <ThemeProvider theme={lightTheme}>
          <body className={inter.className}>
            <GlobalStyles />
            <Header />
            {/* {children} */}
            {/* <h1>footer</h1> */}
          </body>
        </ThemeProvider>
      </html>
    </>
  );
}
