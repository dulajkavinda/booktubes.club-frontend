import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { createPoll } from "../../APIs/api.actions";

export default function AddPoll({ isOpen, onClose, books, club_id }) {
  const [book1, setBook1] = useState("");
  const [book2, setBook2] = useState("");
  const [book3, setBook3] = useState("");
  const [book4, setBook4] = useState("");
  const [book5, setBook5] = useState("");

  const handleBook1Change = (event) => {
    setBook1(event.target.value);
  };

  const handleBook2Change = (event) => {
    setBook2(event.target.value);
  };

  const handleBook3Change = (event) => {
    setBook3(event.target.value);
  };

  const handleBook4Change = (event) => {
    setBook4(event.target.value);
  };

  const handleBook5Change = (event) => {
    setBook5(event.target.value);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Books</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select onChange={handleBook1Change} placeholder="Select Book 1">
              {books.map((books) => {
                return <option value={books._id}>{books.name}</option>;
              })}
            </Select>
            <Select
              onChange={handleBook2Change}
              mt={2}
              placeholder="Select Book 2"
            >
              {books.map((books) => {
                return <option value={books._id}>{books.name}</option>;
              })}
            </Select>
            <Select
              onChange={handleBook3Change}
              mt={2}
              placeholder="Select Book 3"
            >
              {books.map((books) => {
                return <option value={books._id}>{books.name}</option>;
              })}
            </Select>
            <Select
              onChange={handleBook4Change}
              mt={2}
              placeholder="Select Book 4"
            >
              {books.map((books) => {
                return <option value={books._id}>{books.name}</option>;
              })}
            </Select>
            <Select
              onChange={handleBook5Change}
              mt={2}
              placeholder="Select Book 5"
            >
              {books.map((books) => {
                return <option value={books._id}>{books.name}</option>;
              })}
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                const poll = {
                  books: [book1, book2, book3, book4, book5],
                  deadline: "2022-06-29T15:23:29.725Z",
                };

                console.log(poll, club_id);
                createPoll(poll, club_id);
              }}
              colorScheme="blue"
            >
              Create Poll
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
