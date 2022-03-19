import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ClubProgress from "../../components/ClubProgress/ClubProgress";
import BookClubPageTemp from "../BookClubPageTemp/BookClubPageTemp";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { getUsers } from "../../APIs/api.actions";
import Button from "@mui/material/Button";
export default function Club() {
  let location = useLocation();
  const [data, setData] = useState(location.state.club);
  const [users, setUsers] = useState([]);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          width: "70%",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <span style={{ fontSize: "20px" }}>Club Name: {data.club_name}</span>
        <span style={{ fontSize: "16px", marginBottom: "10px" }}>
          {data.description}
        </span>
        <span style={{ fontSize: "16px" }}>Category: {data.category[0]}</span>

        <span style={{ fontSize: "16px" }}>Total members :{users.length}</span>
        <span style={{ fontSize: "16px" }}>
          Total Posts: {data.posts.length}
        </span>
        <BookClubPageTemp />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <TextField id="outlined-basic" label="type.." variant="outlined" />
        <Button variant="contained">SEND</Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "30%",
          backgroundColor: "white",
        }}
      >
        <div className="club-progress-accordian">
          <ClubProgress users={users} />
        </div>
      </div>
    </div>
  );
}
