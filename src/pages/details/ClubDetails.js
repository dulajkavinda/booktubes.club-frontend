import React from "react";
import styles from "./ClubDetails.module.css";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import { useStoreState } from "easy-peasy";
import { useDisclosure } from "@chakra-ui/react";

import Navbar from "../../containers/NavBar/Navbar";
import Post from "../../components/posts/Post";
import AddPoll from "../create/AddPoll";

export default function ClubDetails() {
  const selectedClub = useStoreState((state) => state.selectedClub);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useStoreState((state) => state.user);

  return (
    <div>
      <Navbar username={user.displayName} />
      <div className={styles.main}>
        <AddPoll isOpen={isOpen} onClose={onClose} />
        <div className={styles.header}>
          <div className={styles.other}>
            <div className={styles.image}>
              <span className={styles.title}>
                {selectedClub ? selectedClub.club_name : ""}
              </span>
              <p>{selectedClub ? selectedClub.description : ""}</p>
              {/* <p>Catogery : {selectedClub.category[0]}</p> */}

              {selectedClub.polls !== undefined || selectedClub !== null ? (
                selectedClub.polls.length > 0 ? (
                  <div style={{ marginTop: "10px" }}>
                    <ul>
                      <li>Book1</li>
                      <li>Book2</li>
                      <li>Book3</li>
                      <li>Book4</li>
                      <li>Book5</li>
                      <Button onClick={onOpen} mt={4} colorScheme="blue">
                        Vote
                      </Button>
                    </ul>
                  </div>
                ) : (
                  <Button onClick={onOpen} mt={4} colorScheme="blue">
                    Create Poll
                  </Button>
                )
              ) : null}
            </div>

            <div className={styles.info}>
              <img src={"https://picsum.photos/200/300"} />
            </div>
          </div>
        </div>
        {/* <div className={styles.body}>
        
        </div> */}

        <div className={styles.msg}>
          <div className={styles.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /> <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <Input mt={4} width={"80%"} placeholder="Basic usage" />
          <Button onClick={onOpen} mt={4} colorScheme="blue">
            Send Post
          </Button>
        </div>
      </div>
    </div>
  );
}
