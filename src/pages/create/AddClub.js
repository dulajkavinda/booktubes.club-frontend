import React from "react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import styles from "./AddClub.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createClub } from "../../APIs/api.actions";

import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../../firebase";

export default function AddClub() {
  const [category, setCategory] = React.useState("Thriller");
  const [type, setType] = React.useState("Free");
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [img, setImg] = React.useState("");

  const [loggedUser, loading,error] = useAuthState(auth);
  
  const router = useRouter();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = () => {
    createClub({
      name: name,
      desc: desc,
      img: img,
      type: type,
      currency: category,
      admin : loggedUser
    }).then((response) => {
      if (response.code === 200) {
        router.push("/Dashboard/Dashboard");
      }
    });
  };

  console.log(loggedUser);
  return (
    <div className={styles.main}>
      <span className={styles.title}>Create your Own Club!</span>
      <div className={styles.form}>
        <Input
          onChange={(e) => setName(e.target.value)}
          mt={3}
          placeholder="Club Name"
        />
        <Input
          onChange={(e) => setDesc(e.target.value)}
          mt={3}
          placeholder="Club Description"
        />
        <Input
          onChange={(e) => setImg(e.target.value)}
          mt={3}
          placeholder="Club Image"
        />
        <Select
          onChange={handleTypeChange}
          value={type}
          mt={3}
          placeholder="Select a Club Type"
        >
          <option value="option1">Free</option>
          <option value="option2">Paid</option>
        </Select>
        <Select
          onChange={handleChange}
          value={category}
          mt={3}
          placeholder="Select a Category"
        >
          <option value="option1">Horror</option>
          <option value="option2">Thriller</option>
          <option value="option3">Sci-Fi</option>
          <option value="option3">Romance</option>
        </Select>
        <Button onClick={handleSubmit} mt={2} colorScheme="blue">
          Create a Club
        </Button>
      </div>
    </div>
  );
}
