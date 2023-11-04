import { renderToDom } from './util/renderToDom.js'; // Corrected function name

let pets = [];

const appDiv = document.getElementById('app');
const petForm = document.getElementById('add-pet-form');
const addPetButton = document.getElementById('form-submit'); // Assuming 'form-submit' is the ID of the 'Add Pet' button

// Function to handle the 'Add Pet' button click
addPetButton.addEventListener('click', (event) => {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const color = document.getElementById('color').value;

    const newPet = {
        id: pets.length + 1,
        name: petName,
        color: color,
        // Include additional pet properties
    };

    pets.push(newPet);
    renderToDom(pets); // Corrected function call
    petForm.reset();
});

// Additional event listener for form submission, if needed
petForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Your form submission handling code
});
