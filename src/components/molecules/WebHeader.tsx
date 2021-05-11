import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { LogoImage } from "@/components/atoms/LogoImage";
import styled from "styled-components";

export function WebHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/home">
          <a style={{ textDecoration: "none" }}>
            <LogoContainer>
              <div style={{ width: "50px", height: "50px" }}>
                <LogoImage />
              </div>
              <LogoText>Plangoab</LogoText>
            </LogoContainer>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const LogoText = styled.span`
  font-weight: bold;
  color: white;
`;
