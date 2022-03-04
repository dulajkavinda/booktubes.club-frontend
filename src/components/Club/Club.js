import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import "./Club.scss";

export default function Club({ club, type }) {
  return (
    <Card className="club_main" sx={{ width: 250 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={club.club_name}
        subheader={club.category[0]}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {type === "joined" ? (
            <div className="card_media_main">
              <div>
                <img
                  height={100}
                  src="https://bookaudio.online/uploads/images/media/125/usplBPlBuHH5yS9m-charles-dickens-oliver-twist.jpg"
                />
              </div>
              <div className="book_summary">
                <div>This impressive paella is a perfect party dish and</div>
                <div className="progress">
                  <span>Progress : 90%</span>
                </div>
              </div>
            </div>
          ) : (
            club.description
          )}
        </Typography>
      </CardContent>
      <CardActions>
        {type === "joined" ? (
          <Button variant="contained">View Club</Button>
        ) : (
          <Button color="success" variant="contained">
            Join Club
          </Button>
        )}

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
