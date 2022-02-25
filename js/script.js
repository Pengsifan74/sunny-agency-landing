function toggle() {
    let topLogo = document.querySelector(".topLinks");
    if (topLogo.style.display === "flex") {
        topLogo.style.display = "none";
    } else {
        topLogo.style.display = "flex";
    }
}