import React, { useEffect, useState } from "react";
import Navbar from "../../containers/NavBar/Navbar";
import { Button } from "@chakra-ui/react";
import Club from "../../components/Club/Club";
import { Divider } from "@chakra-ui/react";
import styles from "./Dashboard.module.css";
import Link from "next/link";
import { useStoreState } from "easy-peasy";

import clubdata from "../../data/clubs.json";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { auth } from "../../../firebase";
import { getClubs } from "../../APIs/api.actions";

export default function Dashboard() {
  const user = useStoreState((state) => state.user);
  const [loggedUser, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [bookClubs, setBookClubs] = useState([]);

  // check if user logged in or not
  useEffect(() => {
    if (!loggedUser) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    getClubs()
      .then((res) => {
        setBookClubs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar username={user.displayName} />
      <div className={styles.main}>
        <div className={styles.create}>
          <span className={styles.title}>My Clubs</span>

          <Button ml={5} variant={"outline"} mr={5} colorScheme="blue">
            <Link href={"/create/AddClub"}>
              <a> Create Your Own Club</a>
            </Link>
          </Button>
        </div>

        <Divider />
        <div className={styles.myclub}>
          {/* {clubdata.data.map((club) => {
            if (club.members.includes(user.uid)) {
              return <Club type="my" club={club} />;
            }
          })} */}
          {bookClubs.map((club) => {
            console.log("club", club);
            console.log("user id", loggedUser);

            if (club.members.includes(loggedUser.uid)) {
              console.log("club members", club);
              return <Club type="my" club={club} />;
            } else {
              console.log("no club members");
            }
          })}
        </div>
        <span className={styles.title}>Explore More Clubs</span>
        <Divider />
        <div className={styles.myclub}>
          {/* {clubdata.data.map((club) => {
            return <Club type="all" club={club} />;
          })} */}
          {bookClubs.map((club) => {
            return <Club type="all" club={club} />;
          })}
        </div>
      </div>
    </div>
  );
}
