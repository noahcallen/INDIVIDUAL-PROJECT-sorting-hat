// util/renderToDom.js
export function renderCardToDOM(cardElement) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.appendChild(cardElement);
}
