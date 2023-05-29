"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.h1`
  ${({ theme }) => css`
    color: ${theme.titleColor};
    font-size: 2.4rem;
    text-align: center;
  `}
`;
