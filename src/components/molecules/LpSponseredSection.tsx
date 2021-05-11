import { collaborations } from "@/constants/collaborations";
import { LpSponseredCard } from "@/components/atoms/LpSponseredCard";
import styled from "styled-components";

export function LpSponseredSection() {
  return (
    <div>
      <h2>this is sponsered</h2>
      <SponsersContainer>
        {collaborations.map((item) => (
          <LpSponseredCard collaboration={item} />
        ))}
      </SponsersContainer>
    </div>
  );
}

const SponsersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
