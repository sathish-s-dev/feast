import { db } from '../../firebase.config';
import { getDoc, doc, setDoc } from 'firebase/firestore';

type User = {
	id: string;
	name: string;
	email: string;
	image: string;
};

export const addUserToDb = async (user: User) => {
	const docRef = doc(db, 'users/', user.id);
	const dbDoc = await getDoc(docRef);
	if (dbDoc?.exists()) {
		console.log('user already exists');
		return;
	}
	const newUser = await setDoc(docRef, user);
	console.log(newUser);
	console.log('new user created');
	return;
};
