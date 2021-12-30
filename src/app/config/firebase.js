import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "revents-web-app.firebaseapp.com",
  projectId: "revents-web-app",
  storageBucket: "revents-web-app.appspot.com",
  messagingSenderId: "493864519588",
  appId: "1:493864519588:web:5e4e96fd5f1c862e47a331",
};

export const app = initializeApp(firebaseConfig);
