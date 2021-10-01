import styled from "styled-components";
import { LogoImage } from "~/src/components/v1/atoms/LogoImage";

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
  width: 50px;
  height: 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoText = styled.span`
  font-size: 2rem;
  padding: 1rem;
  font-weight: 600;
  font-family: var(--font-design1);
  color: var(--color-logo);
`;
