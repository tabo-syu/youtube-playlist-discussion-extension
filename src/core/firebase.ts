import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { config } from '../firebase.config';

// Initialize Firebase
export const firebase = initializeApp(config);
export const firestore = getFirestore(firebase);
