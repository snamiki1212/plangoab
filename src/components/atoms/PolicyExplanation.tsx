import React from "react";
import styled from "styled-components";

export function PolicyExplanation() {
  return (
    <Text>
      {/* TODO: Update meaning */}
      This application(Plangoab) use local state. If you accept local data,
      please clicking create button.
    </Text>
  );
}

const Text = styled.div`
  font-size: 0.7rem;
  color: gray;
`;
