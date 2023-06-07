import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: "AIzaSyBhCUIdFvI2xK6pQvMdcYSK0B1pzFJh_uw",
  // authDomain: "ecommerce-597b3.firebaseapp.com",
  // databaseURL: "https://ecommerce-597b3-default-rtdb.firebaseio.com",
  // projectId: "ecommerce-597b3",
  // storageBucket: "ecommerce-597b3.appspot.com",
  // messagingSenderId: "624489464101",
  // appId: "1:624489464101:web:cdcd5c679f68dc7f719acc",
  // measurementId: "G-D1K61R1GRC"

  apiKey: "AIzaSyDhczeuWG4HBcT_1jeChxQE6opVUAi1Daw",
  authDomain: "profemireyita-e1198.firebaseapp.com",
  databaseURL: "https://profemireyita-e1198-default-rtdb.firebaseio.com",
  projectId: "profemireyita-e1198",
  storageBucket: "profemireyita-e1198.appspot.com",
  messagingSenderId: "990917571965",
  appId: "1:990917571965:web:de0922aeb5699764478814",
  measurementId: "G-VPXN2ET8BV"
  
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

