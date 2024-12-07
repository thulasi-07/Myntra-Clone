import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBfsiD5LfrY8ljOHVZ-dT-IW1RLOudPL-4",
  authDomain: "myntra-8e7e0.firebaseapp.com",
  projectId: "myntra-8e7e0",
  storageBucket: "myntra-8e7e0.firebasestorage.app",
  messagingSenderId: "108489490328",
  appId: "1:108489490328:web:d8a6f7fbb13d226fa435ed"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)