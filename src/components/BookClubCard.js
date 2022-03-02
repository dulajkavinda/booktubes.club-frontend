import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const BookClubCard = (props) => {

    return (
        <Card id={`club-card-001`}>
        {/* <Card id={`club-card-${bookClubId}`}></Card> */}
            <CardHeader>
                avatar={
                    <Avatar>A</Avatar>
                }
                title="Bookworms"
                subheader="Author: John Doe"
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. 
                    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                </p>
            </CardContent>
            <Button variant="text">View</Button>
        </Card>
    )
}

export default BookClubCard;