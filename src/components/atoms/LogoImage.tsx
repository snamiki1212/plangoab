import React from "react";
import styled from "styled-components";

export function LogoImage() {
  return (
    <Img
      src={process.env.PUBLIC_URL + "/logo_transparent_410x410.png"}
      alt="img"
    />
  );
}

const Img = styled.img`
  display: inline-block;
  height: 100%;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.3rem;
  border-radius: 50%;
`;
