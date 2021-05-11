import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { LogoImage } from "@/components/atoms/LogoImage";

export function WebHeader() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/home">
          <a>
            <div style={{ width: "50px", height: "50px" }}>
              <LogoImage />
            </div>
            <span>Plangoab</span>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
