import { renderToDOM } from './util/renderToDOM.js';

// Array to store added pets
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
    renderToDOM(pets);
    petForm.reset();
});

renderToDOM(pets);
