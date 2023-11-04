import { createCard } from '../components/card.js'; // Import createCard function

// Render pets to the DOM
function renderToDOM(petsArray) {
    const appDiv = document.querySelector("#app");
    appDiv.innerHTML = '';

    for (const pet of petsArray) {
        const petCard = createCard(pet); // Create a card for each pet
        appDiv.appendChild(petCard);
    }
}

export { renderToDOM };
