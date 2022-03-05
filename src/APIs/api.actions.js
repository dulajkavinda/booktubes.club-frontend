import axios from 'axios';
import { server } from './config';

//Users
export const createUser = async (user) => {
	const userExsits = await axios.get(
		`${server.BACKEND_URL}/users/getUserById/${user.id}`,
	);
	if (userExsits.data.data.length === 0) {
		const response = await axios.post(
			`${server.BACKEND_URL}/users/signUp`,
			user,
		);
		return response.data;
	}
};

//Clubs
export const createClub = async (club) => {
	const response = await axios.post(
		`${server.BACKEND_URL}/clubs/createBookClub`,
		club,
	);
	return response.data;
};

export const getClubs = async () => {
	const response = await axios.get(`${server.BACKEND_URL}/clubs/getAllClubs`);
	return response.data;
};

export const addMember = async (clubId, userId) => {
	const response = await axios.put(`${server.BACKEND_URL}/clubs/updateMembers/${clubId}`, {
		user: userId,
	});
	return response.data;
};
