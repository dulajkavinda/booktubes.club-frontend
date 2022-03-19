import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

import { DateTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
export default function AddPoll({open, setOpen}){
    const handleClose = () => {
        setOpen(false);
    }

    const [datePickerValue , setDatePickerValue ] = useState([]);
    const [pollname , setPollname] = useState([]);
    const [book1 , setBook1] = useState([]);
    const [book2 , setBook2] = useState([]);
    const [book3 , setBook3] = useState([]);
    const [book4 , setBook4] = useState([]);
    const [book5 , setBook5] = useState([]);

    const handleCreatePoll = () => {
        console.log(datePickerValue);
        console.log(pollname);
        console.log(book1);
        console.log(book2);
        console.log(book3);
        console.log(book4);
        console.log(book5);
    }
  
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField 
                    fullWidth
                    label="Poll Name"
                    id="pollname"
                    value={pollname}
                    onChange={(e) => setPollname(e.target.value)}
                />
                <Box height={10} />
                <TextField 
                    fullWidth
                    label="Book 1"
                    id="book1"
                    value={book1}
                    onChange={(e) => setBook1(e.target.value)}
                />
                <Box height={10} />
                <TextField 
                    fullWidth
                    label="Book 2"
                    id="book2"
                    value={book2}
                    onChange={(e) => setBook2(e.target.value)}
                />
                <Box height={10} />
                <TextField 
                    fullWidth
                    label="Book 3"
                    id="book3"
                    value={book3}
                    onChange={(e) => setBook3(e.target.value)}
                />
                <Box height={10} />
                <TextField 
                    fullWidth
                    label="Book 4"
                    id="book4"
                    value={book4}
                    onChange={(e) => setBook4(e.target.value)}
                />
                <Box height={10} />
                <TextField 
                    fullWidth
                    label="Book 5"
                    id="book5"
                    value={book5}
                    onChange={(e) => setBook5(e.target.value)}
                />
                <Box height={10} />
                <LocalizationProvider dateAdapter={AdapterDateFns} fullWidth>
                    <DateTimePicker
                        fullWidth
                        renderInput={(props) => <TextField {...props} />}
                        label="Poll Deadline"
                        value={datePickerValue}
                        minDateTime={new Date()}
                        onChange={(newValue) => {
                            setDatePickerValue(newValue);
                        }}
                    />
                    <Box height={10} />
                    <Button variant='contained' onClick={handleCreatePoll}>
                        Create Poll
                    </Button>
                </LocalizationProvider>
            </Box>
        </Modal>
    );
}