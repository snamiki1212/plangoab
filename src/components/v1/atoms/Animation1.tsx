import React from "react";
import styled from "styled-components";

export const Animation1 = styled.div`
  transform: rotateY(-20deg) rotateX(20deg) translateX(1rem);
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  &:hover {
    transform: rotateY(0deg) rotateX(0deg) translateX(0);
  }
`;
