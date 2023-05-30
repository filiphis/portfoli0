"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  margin: 2rem auto;
`;

export const Projects = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  `}
`;
