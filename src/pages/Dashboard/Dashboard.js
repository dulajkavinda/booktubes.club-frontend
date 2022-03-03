import React from "react";
import BookClubList from "./../../containers/BookClubList";
import Button from '@mui/material/Button';
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div>
      <div className='join-club-sec-heading'>
        <h2>Joined Book Clubs</h2>
        <Button className='create-club-btn' variant="contained">Create a new Book Club</Button>
      </div>
      <hr />
      <BookClubList></BookClubList>
    </div>
  );
}
