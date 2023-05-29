import { type } from "os";
import { lightTheme, darkTheme } from "./themes";

// Faz com que o themeProvider pegue a tipagem do lightTheme;
type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
