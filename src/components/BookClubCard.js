import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './BookClubCard.scss';

const BookClubCard = (props) => {

    return (
        <div className='club-card'>
            <Card sx={{ maxWidth: 345 }}>
                {/* <Card id={`club-card-${bookClubId}`}></Card> */}
                <CardHeader
                    title="Bookworms"
                    subheader="Author: John Doe"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                    </Typography>
                </CardContent>
                <Button variant="text">View</Button>
            </Card>
        </div>
    )
}

export default BookClubCard;