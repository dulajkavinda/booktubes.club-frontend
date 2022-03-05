import React, { useState } from "react";
import Card from "../../components/Club/Club";
import AddClub from "../../components/Modals/AddClub";

import "./Dashboard.scss";

import data from "../../data/club.json";
import user_data from "../../data/user.json";

import Button from "@mui/material/Button";

const user_id = "USR001";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="dashboard_main">
      <div className="joined_club_header">
        <div className="dashboard_reading">Joined Clubs</div>
        <Button onClick={handleOpen} variant="contained">
          Create a Book Club
        </Button>
      </div>
      <AddClub open={open} setOpen={setOpen} />
      <div className="dashboard_list">
        {data.clubs
          .filter((club) => {
            return club.members.includes(user_id);
          })
          .map((club) => {
            return <Card type={"joined"} club={club} />;
          })}
      </div>
      <div className="dashboard_reading">Explore New Clubs</div>
      <div className="dashboard_list">
        {data.clubs.map((club) => {
          return <Card type={"explore"} club={club} />;
        })}
      </div>
    </div>
  );
}
