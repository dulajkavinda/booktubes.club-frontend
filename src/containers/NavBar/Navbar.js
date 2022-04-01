import React from "react";
import { Avatar } from "@chakra-ui/react";
import useWindowSize from "../../hooks/useWindowSize";

import styles from "./Navbar.module.css";
import { useStoreState } from "easy-peasy";

export default function Navbar({ username }) {
  const size = useWindowSize();

  return (
    <div className={styles.navbar}>
      <div className={styles.inside}>
        <div className={styles.logo}>booktubes.club</div>
        <div className={styles.links}>
          {size === "lg" ? (
            <>
              <div>Dashboard</div>
              <div>About Us</div>
              <div>{"Hello, " + username}</div>
            </>
          ) : null}

          <div>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </div>
        </div>
      </div>
    </div>
  );
}
