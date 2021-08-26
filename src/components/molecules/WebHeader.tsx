import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { LogoImage } from "@/components/atoms/LogoImage";
import styled from "styled-components";

export function WebHeader() {
  return (
    <AppBar
      position="static"
      style={{
        background: "#fff",
        color: `var(--color-dark1)`,
      }}
      elevation={0}
    >
      <Toolbar>
        <Link href="/home">
          <a style={{ textDecoration: "none" }}>
            <LogoContainer>
              <LogoImageContainer>
                <LogoImage />
              </LogoImageContainer>
              <LogoText>Plangoab</LogoText>
            </LogoContainer>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

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
