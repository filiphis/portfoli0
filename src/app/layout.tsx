"use client";
// import "./styles/global";
import GlobalStyles from "./styles/global";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";

import { Poppins, Big_Shoulders_Display } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

const bigShouldersFont = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang="pt-br"
        className={`${poppins.variable} ${bigShouldersFont.variable}`}
      >
        <ThemeProvider theme={lightTheme}>
          <body>
            <div className="container">
              <GlobalStyles />
              <Header />
              {children}
              {/* <h1>footer</h1> */}
            </div>
          </body>
        </ThemeProvider>
      </html>
    </>
  );
}