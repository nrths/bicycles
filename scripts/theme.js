const themeTogglers = document.querySelectorAll(".toggler__input");

function toggleTheme(event, otherTogglers) {
    if (event.target.checked) {
      document.documentElement.classList.add("theme-dark");
      otherTogglers.forEach((element) => element.checked = true);
    } else {
      document.documentElement.classList.remove("theme-dark");
      otherTogglers.forEach((element) => element.checked = false);
    }
}

themeTogglers.forEach((el) => {
    el.addEventListener("change", (event) => toggleTheme(event, themeTogglers));
});