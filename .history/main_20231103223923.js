document.addEventListener('DOMContentLoaded', function() {
  // Sample first-year wizards data
  const firstYearWizards = [
    { name: 'Card 1', imageUrl: 'https://www.google.com/images', house: 'Gryffindor' },
    { name: 'Card 2', imageUrl: 'https://www.google.com/images', house: 'Slytherin' },
    // ... Add more card data if needed
  ];

  function createCard(studentName, imageUrl, house) {
    const card = document.createElement('div');
    card.classList.add('card');

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
    const appDiv = document.getElementById('app');
    appDiv.appendChild(cardElement);
  }

  firstYearWizards.forEach(wizard => {
    const cardElement = createCard(wizard.name, wizard.imageUrl, wizard.house);
    renderCardToDOM(cardElement);
  });

  function moveCardToVManSection(card) {
    const vMansArmySection = document.getElementById('vMansArmy');
    if (vMansArmySection) {
      if (!card.classList.contains('expelled-card')) {
        const cardToMove = card.cloneNode(true);
        card.classList.add('expelled-card');
        vMansArmySection.appendChild(cardToMove);
        card.remove(); // Remove the card from the initial section
      } else {
        console.error('Card already moved to V Mans Army.');
      }
    } else {
      console.error('V Mans Army section not found.');
    }
  }

  let isProcessing = false;
  document.getElementById('app').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-card')) {
      if (!isProcessing) {
        isProcessing = true;
        const card = event.target.closest('.card');
        if (card) {
          moveCardToVManSection(card);
          isProcessing = false;
        }
      }
    }
  });
});
