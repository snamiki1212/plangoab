import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ROUTES } from "@/constants/routes";
import { LogoWithText } from "@/components/molecules/LogoWithText";

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
        <Link href={ROUTES.HOME}>
          <a style={{ textDecoration: "none" }}>
            <LogoWithText />
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
