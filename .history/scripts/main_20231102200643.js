import { renderToDom } from './util/renderToDom.js'; // Corrected function name

let pets = [];

const appDiv = document.getElementById('app');
const petForm = document.getElementById('add-pet-form');

petForm.addEventListener('submit', (event) => {
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

renderToDom(pets); // Corrected function call
