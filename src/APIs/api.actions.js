import axios from "axios";
import { server } from "./config";

//Users
export const createUser = async (user) => {
  const userExsits = await axios.get(
    `${server.BACKEND_URL}/users/getUserById/${user.id}`
  );

  console.log("hi");
  if (userExsits.data.data.length === 0) {
    const response = await axios.post(
      `${server.BACKEND_URL}/users/signUp`,
      user
    );
    return response.data;
  }
};

export const getCurretReadingsData = async (userId, clubId) => {
  const userData = await axios.get(
    `${server.BACKEND_URL}/users/getUserById/${userId}`
  );

  const booksData = await axios.get(`${server.BACKEND_URL}/books/getBooks`);

  let Readings = [];

  booksData.data.data.forEach((book) => {
    userData.data.data[0].current_readings.forEach((reading) => {
      if (book._id === reading.book_id && reading.club_id === clubId) {
        let obj = {
          book: book,
          progress: reading.percentage,
        };
        Readings.push(obj);
      }
    });
  });

  return Readings;
};

//Clubs
export const createClub = async (club) => {
  const response = await axios.post(
    `${server.BACKEND_URL}/clubs/createBookClub`,
    club
  );
  return response.data;
};

export const getClubs = async () => {
  const response = await axios.get(`${server.BACKEND_URL}/clubs/getAllClubs`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${server.BACKEND_URL}/users/getUsers`);
  return response.data;
};

export const addMember = async (clubId, userId) => {
  const response = await axios.put(
    `${server.BACKEND_URL}/clubs/updateMembers/${clubId}`,
    {
      user: userId,
    }
  );
  return response.data;
};

export const createPoll = async (poll, club_id) => {
  const response = await axios.post(
    `${server.BACKEND_URL}/clubs/createPoll/${club_id}`,
    poll
  );
  return response.data;
};

//Books

export const getBooks = async () => {
  const response = await axios.get(`${server.BACKEND_URL}/books/getBooks`);
  return response.data;
};

export const getBookById = async (book_id) => {
  const response = await axios.get(
    `${server.BACKEND_URL}/books/getBooksById/${book_id}`
  );
  return response.data;
};

export const createPost = async (post, club_id) => {
  const response = await axios.post(
    `${server.BACKEND_URL}/clubs/createPost/${club_id}`,
    post
  );
  return response.data;
};
