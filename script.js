document.addEventListener("DOMContentLoaded", function() {
    const closePopupBtn = document.getElementById("closePopupBtn");
    const imagePopup = document.getElementById("imagePopup");

    // This line forces the popup to show as soon as the HTML content is loaded
    imagePopup.style.display = "flex";

    // Function to close the popup when the user clicks the 'x' button
    closePopupBtn.addEventListener("click", () => {
        imagePopup.style.display = "none";
    });

    // Function to close the popup if the user clicks outside of the content
    window.addEventListener("click", (event) => {
        if (event.target === imagePopup) {
            imagePopup.style.display = "none";
        }
    });
});