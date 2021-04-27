import React from "react";
import styled from "styled-components";

export function PolicyExplanation() {
  return (
    <Text>
      Plangoab use local state. When you accept Plangoab to access to local
      data, please click button.
    </Text>
  );
}

const Text = styled.div`
  font-size: 0.7rem;
  color: gray;
`;
