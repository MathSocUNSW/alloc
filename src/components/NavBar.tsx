// Library Imports
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@mui/material";

// Styling
import styles from "src/styles/NavBar.module.scss";

const NavBar: React.FC = () => {
  const [logged, setLogged] = useState(false);
  
  return (
    <header className={styles.navBar}>
      <Container>
        <div className={styles.navBarLeft}>
          <Link href="https://www.unswmathsoc.org/">
            <a>
              <Image
                src="images/mathsocWhite.svg"
                className={styles.logo}
                alt="MathSoc Logo"
                aria-label="logo"
              />
            </a>
          </Link>
          <Link href="/">
            <p className={styles.navLink}> Alloc </p>
          </Link>
        </div>
      </Container>
      <Container>
        <div className={styles.navBarRight}>
          {/* TODO: PLACEHOLDER BUTTON, replace with route to login page */}
          <button className={styles.authButton} onClick={() => setLogged(!logged)}>
            {logged ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;