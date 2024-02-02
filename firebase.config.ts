// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'feast-dbdab.firebaseapp.com',
	projectId: 'feast-dbdab',
	storageBucket: 'feast-dbdab.appspot.com',
	messagingSenderId: '347240125994',
	appId: '1:347240125994:web:d6959b053d13406ccc5553',
	measurementId: 'G-2RJVS6BMLM',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const gooleProvider = new GoogleAuthProvider();
