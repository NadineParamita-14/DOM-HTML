const button = document.createElement("button");
button.textContent = "Hover Me!";
document.body.insertBefore(button, document.getElementById("hoverText"));

button.addEventListener("mouseover", () => {
    document.getElementById("hoverText").textContent = "Mouse is over the button!";
});
button.addEventListener("mouseout", () => {
    document.getElementById("hoverText").textContent = "Hover over this text!";
});
