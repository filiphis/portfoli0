"use client";
import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 6.4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.4rem;
  font-size: 1.4rem;
  /* width: 100%; */
  width: min(500px, 100%);
`;

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Socials = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  width: 100%;
  ${({ theme }) => css`
    color: ${theme.textColor};
  `}
`;

export const Logo = styled.a`
  ${({ theme }) => css`
    color: ${theme.textColor};
  `}
  font-family: var(--font-big-shoulders);
  font-size: 2.8rem;
  letter-spacing: -0.2rem;
  font-weight: bold;
`;
