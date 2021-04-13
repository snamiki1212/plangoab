import React from "react";
import styled from "styled-components";

export function PolicyExplanation() {
  return (
    <Text>
      This application(Plangoab) use local state. When you accept this app to
      access to local data, please click button.
    </Text>
  );
}

const Text = styled.div`
  font-size: 0.7rem;
  color: gray;
`;
