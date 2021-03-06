import { CSSObject, CSSProp } from "styled-components";
import { Theme } from "../src/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
