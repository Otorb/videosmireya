import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBf1-hdEfkIOVSbg0rpvI2korXBUSE2oOU",
  authDomain: "mireya-a19d1.firebaseapp.com",
  databaseURL: "https://mireya-a19d1-default-rtdb.firebaseio.com",
  projectId: "mireya-a19d1",
  storageBucket: "mireya-a19d1.appspot.com",
  messagingSenderId: "1032466608525",
  appId: "1:1032466608525:web:d4c4e435e3c31d98e18dc4",
  measurementId: "G-BPVQN5RNX7"

  // apiKey: "AIzaSyDhczeuWG4HBcT_1jeChxQE6opVUAi1Daw",
  // authDomain: "profemireyita-e1198.firebaseapp.com",
  // databaseURL: "https://profemireyita-e1198-default-rtdb.firebaseio.com",
  // projectId: "profemireyita-e1198",
  // storageBucket: "profemireyita-e1198.appspot.com",
  // messagingSenderId: "990917571965",
  // appId: "1:990917571965:web:de0922aeb5699764478814",
  // measurementId: "G-VPXN2ET8BV"
  
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

