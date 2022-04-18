import React from "react";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
export default function Post({ post }) {
  return (
    <div
      style={{
        display: "flex",
        height: "50px",
        width: "100%",
        flexDirection: "column",
      }}
    >
      {post.description}
      <div>
        <Button size="xs">Upvote (50)</Button>
        <Button ml={3} size="xs">
          Downvote (12)
        </Button>
        <Badge colorScheme="purple" ml={10}>
          username
        </Badge>
      </div>
    </div>
  );
}
