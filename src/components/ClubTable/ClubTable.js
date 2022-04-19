import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ClubTable = ({clubs, users}) => {

  const getUserName = (id) => {
    let fuser = users.find(user=> user._id === id);
    return fuser.user_name;
  }

    return (
        <div>
            <Grid container spacing={3} mb={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Paper sx={{p: 2,display: 'flex',flexDirection: 'column',}}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Catergory</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Members</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {clubs.map((club) => (
                          <TableRow key={club._id}>
                            <TableCell>{club.club_name}</TableCell>
                            <TableCell>{club.category}</TableCell>
                            <TableCell>{club.description}</TableCell>
                            {club.members.map((member) => (
                              <TableRow key={club._id + member}>
                                <TableCell>{getUserName(member)}</TableCell>
                              </TableRow>
                            ))}                       
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                </Paper>
              </Grid>
            </Grid>
        </div>
    )
};

export default ClubTable;