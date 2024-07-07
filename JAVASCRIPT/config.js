const firebaseConfig = {
  apiKey: "AIzaSyB5LB1iPqLmwOH_OEQ-rl403yxSgrMmYQc",
  authDomain: "facebook-eda62.firebaseapp.com",
  projectId: "facebook-eda62",
  storageBucket: "facebook-eda62.appspot.com",
  messagingSenderId: "684571041691",
  appId: "1:684571041691:web:a50f629aeefb948f07cb3e",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
