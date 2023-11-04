import { renderToDOM } from './util/renderToDom.js'; // Adjust the import name to match the exported function

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
    renderToDOM(pets); // Correct function call to match the imported function name
    petForm.reset();
});

renderToDOM(pets);
