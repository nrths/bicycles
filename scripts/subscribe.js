const subscriptionForm = document.querySelector(".subscription__form");
const subscriptionInput = document.querySelector('.subscription__input[name="email"]');
const subscriptionButton = document.querySelector(".subscription__button");

subscriptionButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    subscriptionForm.reset();
    subscriptionInput.placeholder = "Круто!";
    setTimeout(() => {
      subscriptionInput.placeholder = "Ваш e-mail";
    }, 7000);
});