import React, { useState } from "react";
import styles from "./Club.module.css";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useStoreActions, useStoreState } from "easy-peasy";
import randomcolor from "randomcolor";
import { addMember } from "../../APIs/api.actions";

export const News = React.memo(({ club, type }) => {
  const [stateOpen, setOpen] = useState(false);
  const setClub = useStoreActions((actions) => actions.setClub);
  const user = useStoreState((state) => state.user);
  function handleToggle() {
    setOpen(!stateOpen);
  }

  return (
    <AnimateSharedLayout type="crossfade">
      <motion.div
        layoutId="data"
        whileHover={{ scale: 1.1, opacity: 0.9 }}
        className={styles.news}
      >
        <div
          style={{
            color: "black",
          }}
          className={styles.news_corner}
        ></div>
        <div className={styles.left_col}>
          <img
            src={club.img_url ? club.img_url : "https://picsum.photos/200/300"}
          />
        </div>
        <div className={styles.right_col}>
          <div className={styles.news_title}>
            <span className={styles.title_wrapper}>
              {club ? club.club_name : ""}
            </span>
          </div>
          <div className={styles.news_title}>
            <span>{club ? club.description : ""}</span>
          </div>
          <div>
            <div className={styles.buttons}>
              <div>
                <Button
                  disabled={type === "my" ? true : false}
                  colorScheme="teal"
                  size="xs"
                  onClick={() => addMember(club._id, user.uid)}
                >
                  {type === "my" ? "JOINED" : "JOIN"}
                </Button>
              </div>
              <div>
                <Link href={"/details/ClubDetails"}>
                  <Button
                    onClick={() => setClub(club)}
                    colorScheme="teal"
                    size="xs"
                    variant="outline"
                  >
                    VIEW
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.date}>
              {" "}
              Members : {club ? club.members.length : 0}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
});

export default News;
