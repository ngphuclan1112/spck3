import { db } from "./config.js";
const signupButton = document.querySelector(".btn.btn-primary");
const inputState = document.querySelector("#inputState");
const toast = document.querySelector(".toast");
const showErr = document.querySelector(".toast-body");

signupButton.addEventListener("click", async (e) => {
  e.preventDefault();
  var formData = new FormData(document.getElementById("signup-form"));
  var surName = formData.get("surname");
  var lastName = formData.get("lastname");
  var phoneNumber = formData.get("phonenumber");
  var passWord = formData.get("password");
  var birthDay = formData.get("birthday");
  var gioiTinh = inputState.value;

  if (
    !surName ||
    !lastName ||
    !phoneNumber ||
    !passWord ||
    !birthDay ||
    !gioiTinh
  ) {
    showErr.textContent = "Thiếu dữ liệu";
  } else {
    db.collection("users")
      .doc("SF")
      .add({
        surName: surName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        passWord: passWord,
        birthDay: birthDay,
        gioiTinh: gioiTinh,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        showErr.textContent = "Đăng kí thành công";
        window.location.href = "../HTML/signIn.html";
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  toast.style.opacity = 1;
  setTimeout(() => {
    toast.style.opacity = 0;
  }, 3000);
});
