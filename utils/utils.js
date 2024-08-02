
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";



const firebaseConfig = {
  apiKey: "AIzaSyAXgmwLLU6Is7teXfBWaDx1uqJ_K1t7U-g",
  authDomain: "e-commerce-d53a8.firebaseapp.com",
  projectId: "e-commerce-d53a8",
  storageBucket: "e-commerce-d53a8.appspot.com",
  messagingSenderId: "932546015639",
  appId: "1:932546015639:web:395fd536abeb8ad98054d2",
  measurementId: "G-KHJ3DH4FBH"
};


// // const createUserWithEmailAndPassword = getAuth();
// // createUserWithEmailAndPassword(auth, email, password)
// //   .then((userCredential) => {
// //     // Signed up 
// //     const user = userCredential.user;
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ..
// //   });


  
// // const id = getAuth();
// // const user = id.currentUser;
// // if (user !== null) {
// //   // The user object has basic properties such as display name, email, etc.
// //   const displayName = user.displayName;
// //   const email = user.email;
// //   const photoURL = user.photoURL;
// //   const emailVerified = user.emailVerified;

// //   // The user's ID, unique to the Firebase project. Do NOT use
// //   // this value to authenticate with your backend server, if
// //   // you have one. Use User.getToken() instead.
// //   const uid = user.uid;
// // }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Storage = getAuth(app);
const analytics = getAnalytics(app);


export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  signOut,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc
};









// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// import {
//   getFirestore,
//   doc,
//   setDoc,
//   getDoc,
//   getDocs,
//   collection,
//   addDoc,
//   updateDoc,
//   arrayUnion,
//   arrayRemove,
//   query,
//   where,
//   deleteDoc
// } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
// import {
//   getStorage,
//   ref,
//   uploadBytes,
//   getDownloadURL,
// } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
// const firebaseConfig = {
//   apiKey: "AIzaSyAr2R1sryYvVbSNdplyeKYrIHHZ6D0uZyc",
//   authDomain: "calcium-pod-256305.firebaseapp.com",
//   projectId: "calcium-pod-256305",
//   storageBucket: "calcium-pod-256305.appspot.com",
//   messagingSenderId: "182256618793",
//   appId: "1:182256618793:web:c3c627824b1c28feea3b38",
//   measurementId: "G-3R2S7KYERZ",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// const analytics = getAnalytics(app);

// export {
//   auth,
//   db,
//   storage,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   doc,
//   setDoc,
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   signOut,
//   getDoc,
//   collection,
//   addDoc,
//   getDocs,
//   updateDoc,
//   arrayUnion,
//   arrayRemove,
//   query,
//   where,
//   deleteDoc
// };