"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  width: 100%;
`;

export const Socials = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Logo = styled.a`
  ${({ theme }) => css`
    color: ${theme.textColor};
  `}
  /* color: #f6f6f6; */
  font-size: 2.8rem;
  letter-spacing: -0.2rem;
  font-weight: bold;
`;
