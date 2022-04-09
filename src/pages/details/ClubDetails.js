import React, { useState, useEffect } from "react";
import styles from "./ClubDetails.module.css";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import { useStoreState } from "easy-peasy";
import { useDisclosure } from "@chakra-ui/react";
import { getBooks, getBookById, createPost } from "../../APIs/api.actions";

import Navbar from "../../containers/NavBar/Navbar";
import Post from "../../components/posts/Post";
import AddPoll from "../create/AddPoll";

export default function ClubDetails() {
  const selectedClub = useStoreState((state) => state.selectedClub);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useStoreState((state) => state.user);
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  console.log(selectedClub);

  function getAllBooks() {
    getBooks()
      .then((res) => {
        setBooks(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getBook() {
    getBookById("selectedClub.polls[0].books[0]")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllBooks();
    console.log(books);
    getBook();
  }, []);

  return (
    <div>
      <Navbar username={user.displayName} />
      <div className={styles.main}>
        {selectedClub && books && books.length > 0 ? (
          <AddPoll
            isOpen={isOpen}
            onClose={onClose}
            books={books}
            club_id={selectedClub._id}
          />
        ) : null}

        <div className={styles.header}>
          <div className={styles.other}>
            <div className={styles.image}>
              <span className={styles.title}>
                {selectedClub ? selectedClub.club_name : ""}
              </span>
              <p>{selectedClub ? selectedClub.description : ""}</p>
              {/* <p>Catogery : {selectedClub.category[0]}</p> */}

              {selectedClub ? (
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
                ) : selectedClub.admin === user.uid ? (
                  <Button onClick={onOpen} mt={4} colorScheme="blue">
                    Create Poll
                  </Button>
                ) : null
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
            {selectedClub
              ? selectedClub.posts.map((post) => {
                  return <Post post={post} />;
                })
              : null}
          </div>
          <Input
            onChange={(e) => setMessage(e.target.value)}
            mt={4}
            width={"80%"}
            placeholder="tell something.."
          />
          <Button
            onClick={() => {
              createPost(
                {
                  user: user.uid,
                  description: message,
                },
                selectedClub._id
              );
            }}
            mt={4}
            colorScheme="blue"
          >
            Send Post
          </Button>
        </div>
      </div>
    </div>
  );
}
