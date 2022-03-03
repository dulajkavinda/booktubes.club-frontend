import React from "react";
import BookClubCard from "../components/BookClubCard"
import './BookClubList.scss'

const BookClubList = (props) => {

    return (
        <div className='book-club-container'>
            {/* Iterate joined bookclubs */}
            <BookClubCard />
            <BookClubCard />
            <BookClubCard />
        </div>
    )
}

export default BookClubList;