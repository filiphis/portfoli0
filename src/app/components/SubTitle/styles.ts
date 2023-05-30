"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.subTitleColor};
    font-size: 2rem;
    text-align: left;
  `}
`;
