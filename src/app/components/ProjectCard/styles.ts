"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: min(340px, 100%);
    background-color: ${theme.cardBackgroundColor};
    height: 350px;
    border-radius: 0.8rem;
    box-shadow: 0 1px 2px rgba(25, 25, 34, 0.15);
    transition-duration: 200ms;
    &:hover {
      box-shadow: 0 2px 4px rgba(25, 25, 34, 0.25);
      transition-duration: 200ms;
    }
  `}
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 0.8rem;
  width: min(340px, 100%);
`;
