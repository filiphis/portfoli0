"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: min(340px, 100%);
    background-color: ${theme.cardBackgroundColor};
    height: 450px;
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

export const ContentContainer = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Technologies = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Tech = styled.span`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: bold;
    color: ${theme.textColor};
  `}
`;

export const ProjectLinks = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: ${theme.titleColor};
      font-size: 1.8rem;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;
