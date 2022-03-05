import React, { useState, useEffect } from "react";
import Card from "../../components/Club/Club";
import AddClub from "../../components/Modals/AddClub";

import "./Dashboard.scss";

import Button from "@mui/material/Button";
import {getClubs} from '../../APIs/api.actions'

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [bookClubs, setBookClubs] = useState([]);
  const [userId, setUserId] = useState('');
  const [newJoin, setNewJoin] = useState(false);

  useEffect(() => {
    getClubs().then(res => {
      setBookClubs(res.data);
    }).catch(err => {
      console.log(err);
    })
    setUserId(localStorage.getItem('user'))
  }, []);

  useEffect(() => {
    getClubs().then(res => {
      setBookClubs(res.data);
    }).catch(err => {
      console.log(err);
    })
    setUserId(localStorage.getItem('user'))
  }, [newJoin]);

  const handleOpen = () => setOpen(true);

  const handleNewJoin = () => {
    setNewJoin(true);
  }

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
        {bookClubs
          .filter((club) => {
            return club.members.includes(userId);
          })
          .map((club) => {
            return <Card type={"joined"} club={club} />;
          })}
      </div>
      <div className="dashboard_reading">Explore New Clubs</div>
      <div className="dashboard_list">
        {bookClubs.filter((club) => {
            return !club.members.includes(userId);
          }).map((club) => {
          return <Card type={"explore"} club={club} joins={handleNewJoin}/>;
        })}
      </div>
    </div>
  );
}
