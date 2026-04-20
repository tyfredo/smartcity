   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
   import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
   import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyB4a2zXbvbWQW7H-j2OMXWdPiIXsfAZn0M",
    authDomain: "smart-city-e9c1a.firebaseapp.com",
    projectId: "smart-city-e9c1a",
    storageBucket: "smart-city-e9c1a.firebasestorage.app",
    messagingSenderId: "974900849384",
    appId: "1:974900849384:web:43bfb1f1b8e37114f5f75d"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {app, auth, db};