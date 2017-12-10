var open = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

open.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("modal-show");
});
cancel.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (event) {
    localStorage.setItem("login", login.value);
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});
