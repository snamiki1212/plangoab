import styled from "styled-components";

// TODO: v1 to v2
import { LogoImage } from "@/components/v1/atoms/LogoImage";

export const LogoWithText = () => {
  return (
    <LogoContainer>
      <LogoImageContainer>
        <LogoImage />
      </LogoImageContainer>
      <LogoText>Plangoab</LogoText>
    </LogoContainer>
  );
};

const LogoImageContainer = styled.div`
  width: 2rem;
  height: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-design1);
  color: var(--color-logo);
`;
