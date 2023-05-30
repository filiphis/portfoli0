"use client";
import styled, { css } from "styled-components";
import { TitleProps } from ".";

const FONT_SIZES = {
  title: "3rem",
  subtitle: "2rem",
  cardTitle: "1.8rem",
};

export const Wrapper = styled.h1<TitleProps>`
  ${({ theme, align, fontSize }) => css`
    color: ${theme.titleColor};
    font-size: ${FONT_SIZES[fontSize]};
    text-align: ${align};
  `}
`;
