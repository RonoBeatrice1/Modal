const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const closeModal = function () {
  //This function is used to hide both the modal and overlay by adding the "hidden" class to their respective elements.
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal); //When this button is clicked, it calls the closeModal function, which hides the modal and overlay.
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  //This line adds a keydown event listener to the entire document. It listens for keyboard events.
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    //Inside the keydown event listener, this line checks if the pressed key is the "Escape" key (e.key === "Escape") and if the modal is not already hidden (!modal.classList.contains("hidden")). If both conditions are met, it calls the closeModal function to close the modal.
    closeModal();
  }
});

const openModal = function () {
  //This function is used to display the modal and overlay by removing the "hidden" class from their respective elements.
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal); // When this button is clicked, it calls the openModal function, displaying the modal.
