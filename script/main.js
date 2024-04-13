
function mostrarMenu() {
    const divAuthButtons = document.getElementById("authButtonsContainers");
    if (divAuthButtons.style.display === "block")
        divAuthButtons.style.display = "none";
    else
        divAuthButtons.style.display = "block";

    const divBotones = document.getElementById("menuList");
    if (divBotones.style.display === "block")
        divBotones.style.display = "none";
    else
        divBotones.style.display = "block";
}