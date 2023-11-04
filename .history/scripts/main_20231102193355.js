// Importing required functionalities
import { pets } from '../data/petsArray.js';
import { createCard } from '../components/card.js';
import { renderToDOM } from '../util/renderToDom.js';

// Function to render pets to the DOM
// This function can be present in 'util/renderToDom.js'
function renderToDOM(petsArray) {
    const appDiv = document.querySelector("#app");
    appDiv.innerHTML = '';

    for (const pet of petsArray) {
        const petCard = createCard(pet);
        appDiv.appendChild(petCard);
    }
}

// Ensure the 'renderToDOM' function is called with the 'pets' array to display pets
renderToDOM(pets);
