import React from "react";
import styled from "styled-components";
import { collaborations } from "@/constants/collaborations";

export function CollaborationsSection() {
  return (
    <Container>
      {collaborations.map(({ link, name, logo }) => (
        <InnerContainer key={name}>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Img src={logo} alt={`${name}-logo`} />
          </Link>
        </InnerContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Link = styled.a`
  text-decoration: none;
`;

const InnerContainer = styled.div`
  text-align: center;
`;

const Img = styled.img`
  padding: 0.5rem;
  width: 6rem;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    opacity: 0.9;
    background: #ececec;
    border-radius: 30px;
  }
`;
