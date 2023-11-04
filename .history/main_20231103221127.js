document.addEventListener('DOMContentLoaded', function() {
  // Sample first-year wizards data
  const firstYearWizards = [
    { name: 'Card 1', imageUrl: 'https://www.google.com/images', house: 'Gryffindor' },
    { name: 'Card 2', imageUrl: 'https://www.google.com/images', house: 'Slytherin' },
    { name: 'Card 3', imageUrl: 'https://www.google.com/images', house: 'Ravenclaw' },
    { name: 'Card 4', imageUrl: 'https://www.google.com/images', house: 'Hufflepuff' },
    { name: 'Card 5', imageUrl: 'https://www.google.com/images', house: 'Gryffindor' },
    { name: 'Card 6', imageUrl: 'https://www.google.com/images', house: 'Slytherin' },
    { name: 'Card 7', imageUrl: 'https://www.google.com/images', house: 'Ravenclaw' },
    { name: 'Card 8', imageUrl: 'https://www.google.com/images', house: 'Hufflepuff' },
    { name: 'Card 9', imageUrl: 'https://www.google.com/images', house: 'Gryffindor' },
    { name: 'Card 10', imageUrl: 'https://www.google.com/images', house: 'Slytherin' }
    // Add more wizard data here if needed
  ];

  let expelledCardCounter = 1;

  function createCard(studentName, imageUrl, house) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Create and append card HTML based on the provided details
    card.innerHTML = `
      <div class="card" style="width: 15rem;">
          <img src="${imageUrl}" class="card-img-top" alt="Student Image">
          <div class="card-body">
              <h5 class="card-title">${studentName}</h5>
              <p class="card-text">House: ${house}</p>
              <button class="btn btn-danger remove-card">Expel</button>
          </div>
      </div>
    `;

    return card;
  }

  function renderCardToDOM(cardElement) {
    const appDiv = document.getElementById("app");
    appDiv.appendChild(cardElement);
  }

  function moveCardToVManSection(card) {
    const expelledSection = document.getElementById('expelledSection');

    if (expelledSection) {
      const cardToMove = card.cloneNode(true);
      card.remove();
      cardToMove.classList.add('expelled-card');
      cardToMove.querySelector('.card-title').textContent = `Expelled Card ${expelledCardCounter}`;
      expelledCardCounter++;
      expelledSection.appendChild(cardToMove);
    } else {
      console.error('Expelled section not found.');
    }
  }

  firstYearWizards.forEach(wizard => {
    const cardElement = createCard(wizard.name, wizard.imageUrl, wizard.house);
    renderCardToDOM(cardElement);
  });

  document.getElementById('app').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-card')) {
      const card = event.target.closest('.card');
      if (card) {
        moveCardToVManSection(card);
      }
    }
  });
});
