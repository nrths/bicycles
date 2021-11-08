const subscriptionInput = document.querySelector('.subscription__input[name="email-form"]');
const subscriptionButton = document.querySelector(".subscription__button");

subscriptionInput.addEventListener("click", function () {
  subscriptionInput.placeholder = "";
});

subscriptionButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  const eMailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (subscriptionInput.value.match(eMailRegex)) {
    subscriptionInput.value = "";
    subscriptionInput.placeholder = "Круто!";
  } else {
    subscriptionInput.value = "";
    subscriptionInput.placeholder = "Ошибка! Попробуйте еще раз.";
  }
});