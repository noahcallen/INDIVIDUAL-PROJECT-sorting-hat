import { createCard } from './components/card.js';
import { renderToDOM } from './util/renderToDOM.js';

const appDiv = document.getElementById('app');
const petForm = document.getElementById('add-pet-form');

// Array to store added pets
let pets = [];

petForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const color = document.getElementById('color').value;
    // Other pet information...

    const newPet = {
        id: pets.length + 1, // Generate an ID for the new pet
        name: petName,
        color: color,
        // Add other properties as required
    };

    pets.push(newPet); // Add the new pet to the array
    renderToDOM(pets); // Render the updated array of pets
    petForm.reset(); // Clear the form fields
});

renderToDOM(pets); // Initial rendering when the page loads
