document.querySelector(".dropdown-svg").addEventListener("click", function () {
    let dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});