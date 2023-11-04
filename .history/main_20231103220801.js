document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code that manipulates the expelledSection
  // Ensure that the element with ID 'expelledSection' exists in your HTML.

  // Sample first-year wizards data
  const firstYearWizards = [
    { name: 'Harry Potter', imageUrl: 'https://www.google.com/images', house: 'Gryffindor' },
    // Add more wizard data here if needed
  ];

  // Function to create a card based on student name, image URL, and house
  function createCard(studentName, imageUrl, house) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Create and append card HTML based on the provided details
    // Replace this with appropriate HTML structure based on your design
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

  // Function to render a card to the DOM
  function renderCardToDOM(cardElement) {
    const appDiv = document.getElementById("app");
    appDiv.appendChild(cardElement);
  }

  // Function to remove a card and move it to V Mans Army section
  function moveCardToVManSection(card) {
    const expelledSection = document.getElementById('expelledSection');
    const cardToMove = card.cloneNode(true);
    card.remove();

    if (expelledSection) {
      cardToMove.classList.add('expelled-card');
      expelledSection.appendChild(cardToMove);
    } else {
      console.error('Expelled section not found.');
    }
  }

  // Initial rendering of existing cards
  firstYearWizards.forEach(wizard => {
    const cardElement = createCard(wizard.name, wizard.imageUrl, wizard.house);
    renderCardToDOM(cardElement);
  });

  // Sort (create) a new card on button click
  document.getElementById('form-submit').addEventListener('click', () => {
    const studentName = document.getElementById('exampleInput').value;
    const imageURL = document.getElementById('examplePassword').value;

    // Randomly assigning a house for the new card (dummy implementation)
    const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];

    const newCard = createCard(studentName, imageURL, randomHouse);
    renderCardToDOM(newCard);
  });

  // Remove a card on click and move it to the expelled section
  document.getElementById('app').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-card')) {
      const card = event.target.closest('.card');
      if (card) {
        moveCardToVManSection(card);
      }
    }
  });

});
