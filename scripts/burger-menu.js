const popupMenu = document.querySelector(".popup");
const popupOpenButton = document.querySelector(".button_assignment_menu");
const popupCloseButton = popupMenu.querySelector(".button_assignment_close");
const popupLink = document.querySelectorAll('.popup__link');

function popupOpened(popup) {
    popup.classList.add('popup_opened');
};
function popupClosed(popup) {
    popup.classList.remove('popup_opened');
};

popupOpenButton.addEventListener('click', () => popupOpened(popupMenu));
popupCloseButton.addEventListener('click', () => popupClosed(popupMenu));

popupLink.forEach((link) =>
  link.addEventListener("click", () => popupClosed(popupMenu))
);
