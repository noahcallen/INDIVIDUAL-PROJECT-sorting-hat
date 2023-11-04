// utils/renderToDom.js
export function renderCardToDOM(cardElement, containerId, house) {
  const cardContainer = document.getElementById(containerId);
  cardContainer.appendChild(cardElement);

  // Update the house text content in the card's HTML
  const houseElement = cardElement.querySelector('.card-text');
  houseElement.textContent = `House: ${house}`;
}
