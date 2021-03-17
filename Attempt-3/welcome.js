let welcomePopup = document.querySelector(".welcome-popup");

setTimeout(showPopup(welcomePopup), 5000);

function showPopup(popup) {
    popup.classList.remove("hide");
    popup.classList.add("show");
}

function hidePopup(popup) {
    popup.classList.remove("add");
    popup.classList.add("hide");

}