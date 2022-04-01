import React from "react";
import Navbar from "../../containers/NavBar/Navbar";
import { Button } from "@chakra-ui/react";
import Club from "../../components/club/Club";
import { Divider } from "@chakra-ui/react";
import styles from "./Dashboard.module.css";
import Link from "next/link";
import { useStoreState } from "easy-peasy";

import clubdata from "../../data/clubs.json";

export default function Dashboard() {
  const user = useStoreState((state) => state.user);

  return (
    <div>
      <Navbar username={user.displayName} />
      <div className={styles.main}>
        <div className={styles.create}>
          <span className={styles.title}>My Clubs</span>

          <Button ml={5} variant={"outline"} mr={4} colorScheme="blue">
            <Link href={"/create/AddClub"}>
              <a> Create Your Own Club</a>
            </Link>
          </Button>
        </div>

        <Divider />
        <div className={styles.myclub}>
          {clubdata.data.map((club) => {
            if (club.members.includes(user.uid)) {
              return <Club type="my" club={club} />;
            }
          })}
        </div>
        <span className={styles.title}>Explore More Clubs</span>
        <Divider />
        <div className={styles.myclub}>
          {clubdata.data.map((club) => {
            return <Club type="all" club={club} />;
          })}
        </div>
      </div>
    </div>
  );
}
