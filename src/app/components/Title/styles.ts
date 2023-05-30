"use client";
import styled, { css } from "styled-components";
import { TitleProps } from ".";

export const Wrapper = styled.h1<TitleProps>`
  ${({ theme, align }) => css`
    color: ${theme.titleColor};
    font-size: 3rem;
    text-align: ${align};
  `}
`;
