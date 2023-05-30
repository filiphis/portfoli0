"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  margin: 1.6rem 0;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 4.8rem;
    color: ${theme.titleColor};
  `}
`;

export const SubTitle = styled.span`
  ${({ theme }) => css`
    font-size: 3.2rem;
    color: ${theme.subTitleColor};
  `}
`;

export const Content = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 2rem;
  justify-items: center;
`;
