let welcomePopup = document.querySelector(".welcomepopup-outer");

setTimeout(showPopup(welcomePopup), 5000);

function showPopup(popup) {
    popup.classList.remove("hide");
    popup.classList.add("show");
}

function hidePopup() {
    popup.classList.remove("add");
    popup.classList.add("hide");

}