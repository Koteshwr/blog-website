import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCOEaive0V3fK5sQVCwC-JKmXHmAKntO3c",
    authDomain: "blogapp-b6fe6.firebaseapp.com",
    projectId: "blogapp-b6fe6",
    storageBucket: "blogapp-b6fe6.appspot.com",
    messagingSenderId: "661393719192",
    appId: "1:661393719192:web:f16b70d065147e297735ed",
    measurementId: "G-N7B6HND6T6"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);