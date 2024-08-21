const form = document.querySelector("form");
const inputValue = document.querySelectorAll(".formInput");
// const errorMessage = document.querySelector(".empty");
const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
  button.style.backgroundColor = "rgb(223, 94, 94)";
});
button.addEventListener("mouseleave", () => {
  button.style.backgroundColor = "gray";
});

form.addEventListener("submit", runSubmit);
function runSubmit(e) {
  e.preventDefault();
  let eachInput = Array.from(form.children);

  let validated = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  eachInput.forEach((val) => {
    if (val.id === "firstName") {
      if (val.firstElementChild.value === "") {
        validateError(val, "enter your firstname", val.lastElementChild);
        validated.firstname = "";
      } else if (val.firstElementChild.value.length <= 5) {
        validateError(val, "less than 5", val.lastElementChild);
        validated.firstname = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.firstname = val.firstElementChild.value;
      }
    } else if (val.id === "lastName") {
      if (val.firstElementChild.value === "") {
        validateError(val, "enter your lastname", val.lastElementChild);
        validated.lastname = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.lastname = val.firstElementChild.value;
      }
    } else if (val.id === "userName") {
      if (val.firstElementChild.value === "") {
        validateError(val, "enter your lastname", val.lastElementChild);
        validated.username = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.username = val.firstElementChild.value;
      }
    } else if (val.id === "userEmail") {
      if (val.firstElementChild.value === "") {
        validateError(val, "enter your lastname", val.lastElementChild);
        validated.email = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.email = val.firstElementChild.value;
      }
    } else if (val.id === "userPassword") {
      if (val.firstElementChild.value === "") {
        validateError(val, "create a password", val.lastElementChild);
        validated.password = "";
      } else if (val.firstElementChild.value.length <= 5) {
        validateError(
          val,
          "password must not be less than 5",
          val.lastElementChild
        );
        validated.password = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.password = val.firstElementChild.value;
      }
    } else if (val.id === "confirmPassword") {
      if (val.firstElementChild.value === "") {
        validateError(val, "not match", val.lastElementChild);
        validated.confirmPassword = "";
      } else if (
        val.firstElementChild.value !==
        document.querySelector("#userPassword").firstElementChild.value
      ) {
        validateError(val, "password not match", val.lastElementChild);
        validated.confirmPassword = "";
      } else {
        validateSuccess(val, val.lastElementChild);
        validated.confirmPassword =
          document.querySelector("#userPassword").firstElementChild.value;
      }
    }
  });

  console.log(validated);
  if (
    validated.firstname !== "" &&
    validated.lastname !== "" &&
    validated.username !== "" &&
    validated.email !== "" &&
    validated.password !== ""
  ) {
    console.log("good");
  } else {
    console.log("bad");
  }
}

const validateSuccess = (val, errorMessage) => {
  errorMessage.style.visibility = "hidden";
  val.firstElementChild.classList.remove("invalid");
  val.firstElementChild.classList.add("valid");
};
const validateError = (val, cautionMessage, errorMessage) => {
  errorMessage.style.visibility = "visible";
  errorMessage.textContent = cautionMessage;
  val.firstElementChild.classList.remove("valid");
  val.firstElementChild.classList.add("invalid");
};
