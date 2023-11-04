function renderToDOM(petsArray) {
  const appDiv = document.querySelector("#app");
  appDiv.innerHTML = '';

  for (const pet of petsArray) {
      const petCard = createCard(pet); // Assuming createCard is imported from 'components/card.js'
      appDiv.appendChild(petCard);
  }
}

export { renderToDOM };
