import { db } from "./config.js";
const loginButton = document.querySelector(".login-button-1");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

loginButton.addEventListener("click", () => {
  db.collection("users")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data().passWord);
        console.log(doc.data().phoneNumber);
      });
    });
});
