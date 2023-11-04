document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code that manipulates the expelledSection
  // Ensure that the element with ID 'expelledSection' exists in your HTML.




// Sample first-year wizards data
const firstYearWizards = [
  { name: 'Card 1', imageUrl: 'https://images.nightcafe.studio/jobs/KqHmLBPrzUzysBoBsQOV/KqHmLBPrzUzysBoBsQOV--2--w2mf1_2x.jpg?tr=w-1600,c-at_max', house: 'Gryffindor' },
  { name: 'Card 2', imageUrl: 'https://images.nightcafe.studio/jobs/YBWH2nlRF9O1xEkQy0pK/YBWH2nlRF9O1xEkQy0pK--40--O5P5D.jpg?tr=w-1600,c-at_max', house: 'Slytherin' },
  { name: 'Card 3', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9fde2d65-0931-4f5c-bd1e-d14f2bd1a835/dfyz6ga-6be8845e-1d09-4b96-8245-0e60e4499275.jpg/v1/fill/w_894,h_894,q_70,strp/wizard_from_ai_by_professoralexhype_dfyz6ga-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzlmZGUyZDY1LTA5MzEtNGY1Yy1iZDFlLWQxNGYyYmQxYTgzNVwvZGZ5ejZnYS02YmU4ODQ1ZS0xZDA5LTRiOTYtODI0NS0wZTYwZTQ0OTkyNzUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NQ2L6GWVeCoy48L-vG_ciIkk8bVUbI_4Emq3s6CKJH4', house: 'Ravenclaw' },
  { name: 'Card 4', imageUrl: 'https://theaipromptshop.com/cdn/shop/products/PureWhiteCanvas_Create_a_magical_scene_using_a_warm_color_schem_6737c65c-4777-4cd9-a0a0-ee3d4dd689a5.png?v=1677696133', house: 'Hufflepuff' },
  { name: 'Card 5', imageUrl: 'https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxsT1RJNU56UmtZUzAxTW1FeUxUUmhZVGN0WWpsaE55MHhNems1TVdRelpEaG1ZV0lHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--3fa80d1e72aea8aa62b41a5da56fe49c30067865/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-58f7b898046.png', house: 'Gryffindor' },
  { name: 'Card 6', imageUrl: 'https://i.redd.it/js2zsjei7k6a1.jpg', house: 'Slytherin' },
  { name: 'Card 7', imageUrl: 'https://as1.ftcdn.net/v2/jpg/05/52/93/60/1000_F_552936066_p3cr1C2M8ZpuXeEbIJa8EICZ0r7SHhSq.jpg', house: 'Ravenclaw' },
  { name: 'Card 8', imageUrl: 'https://nerdsonearth.com/wp-content/uploads/2015/01/Gandalf.jpg', house: 'Hufflepuff' },
  { name: 'Card 9', imageUrl: 'https://img.freepik.com/premium-photo/ai-generated-image-elderly-sorcerer-wizard-practicing-his-magic-tricks-his-laboratory_252214-3186.jpg', house: 'Gryffindor' },
  { name: 'Card 10', imageUrl: 'https://images.nightcafe.studio/jobs/rEDF7l4WYgBv62EDVwCn/rEDF7l4WYgBv62EDVwCn--1--9xrwo.jpg?tr=w-1600,c-at_max', house: 'Slytherin' }
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

// Function to remove a card (event delegation)
document.getElementById('app').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-card')) {
    moveCardToVManSection(event.target.closest('.card'));
  }
});

function moveCardToVManSection(card) {
  const expelledSection = document.getElementById('expelledSection');
  if (expelledSection) {
    const cardToMove = card.cloneNode(true);
    cardToMove.classList.add('expelled-card');
    expelledSection.appendChild(cardToMove);
  } else {
    console.error('Expelled section not found.');
  }
}

// Function to render expelled cards to the "Vmans army" section
function renderExpelledCards(expelledPetsArray) {
  const expelledSection = document.querySelector('#expelledSection');

  if (!expelledSection) {
    expelledSection = document.createElement('div');
    expelledSection.id = 'expelledSection';
    expelledSection.classList.add('text-center', 'mb-5');
    expelledSection.innerHTML = '<h2>V Man\'s Army</h2>';
    document.body.appendChild(expelledSection);
  } else {
    expelledSection.innerHTML = '<h2>V Man\'s Army</h2>';
  }

  for (const pet of expelledPetsArray) {
    const expelledCard = document.createElement('div');
    expelledCard.classList.add('card', 'expelled-card');
    expelledCard.innerHTML = `
      <div class="card" style="width: 15rem;">
          <img src="${pet.imageUrl}" class="card-img-top" alt="Student Image">
          <div class="card-body">
              <h5 class="card-title">${pet.name}</h5>
              <p class="card-text">House: ${pet.house}</p>
              <button class="btn btn-danger remove-card">Expel</button>
          </div>
      </div>
    `;
    expelledSection.appendChild(expelledCard);
  }
}
function moveCardToVManSection(card) {
  const vMansArmySection = document.getElementById('vMansArmy');
  if (vMansArmySection) {
    if (!card.classList.contains('expelled-card')) {
      const cardToMove = card.cloneNode(true);
      card.classList.add('expelled-card');
      vMansArmySection.appendChild(cardToMove);
    } else {
      console.error('Card already moved to V Mans Army.');
    }
  } else {
    console.error('V Mans Army section not found.');
  }
}

let isProcessing = false; // Variable to track if the action is in progress
document.getElementById('app').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-card')) {
    if (!isProcessing) { // Proceed only if the previous action is completed
      isProcessing = true; // Mark the action as in progress
      const card = event.target.closest('.card');
      if (card) {
        moveCardToVManSection(card);
        isProcessing = false; // Mark the action as complete
      }
    }
  }
});
