"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    line-height: 175%;
    color: ${theme.textColor};
    /* text-align: center; */
    margin-top: 0.8rem;
  `}
`;
