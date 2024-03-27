const checkbox = document.querySelector(".join-us__checkbox-input");
const submitButton = document.querySelector(".join-us__submit-button");

checkbox.addEventListener('change', function() {
    submitButton.classList.toggle("active")
    if (checkbox.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});