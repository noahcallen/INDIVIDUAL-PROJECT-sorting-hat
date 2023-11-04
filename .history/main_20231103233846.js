document.addEventListener('DOMContentLoaded', function() {

// Sample firstyear wizards
const firstYearWizards = [
  { name: 'Ronald', imageUrl: 'https://images.nightcafe.studio/jobs/KqHmLBPrzUzysBoBsQOV/KqHmLBPrzUzysBoBsQOV--2--w2mf1_2x.jpg?tr=w-1600,c-at_max', house: 'Gryffindor' },
  { name: 'Eric', imageUrl: 'https://images.nightcafe.studio/jobs/YBWH2nlRF9O1xEkQy0pK/YBWH2nlRF9O1xEkQy0pK--40--O5P5D.jpg?tr=w-1600,c-at_max', house: 'Slytherin' },
  { name: 'Carter', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9fde2d65-0931-4f5c-bd1e-d14f2bd1a835/dfyz6ga-6be8845e-1d09-4b96-8245-0e60e4499275.jpg/v1/fill/w_894,h_894,q_70,strp/wizard_from_ai_by_professoralexhype_dfyz6ga-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzlmZGUyZDY1LTA5MzEtNGY1Yy1iZDFlLWQxNGYyYmQxYTgzNVwvZGZ5ejZnYS02YmU4ODQ1ZS0xZDA5LTRiOTYtODI0NS0wZTYwZTQ0OTkyNzUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NQ2L6GWVeCoy48L-vG_ciIkk8bVUbI_4Emq3s6CKJH4', house: 'Ravenclaw' },
  { name: 'Bob', imageUrl: 'https://theaipromptshop.com/cdn/shop/products/PureWhiteCanvas_Create_a_magical_scene_using_a_warm_color_schem_6737c65c-4777-4cd9-a0a0-ee3d4dd689a5.png?v=1677696133', house: 'Hufflepuff' },
  { name: 'Thomas', imageUrl: 'https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxsT1RJNU56UmtZUzAxTW1FeUxUUmhZVGN0WWpsaE55MHhNems1TVdRelpEaG1ZV0lHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--3fa80d1e72aea8aa62b41a5da56fe49c30067865/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--935666d13f63ed5aca9daa2416340e3a90b6014e/prompthero-prompt-58f7b898046.png', house: 'Gryffindor' },
  { name: 'Harry', imageUrl: 'https://i.redd.it/js2zsjei7k6a1.jpg', house: 'Slytherin' },
  { name: 'Zach', imageUrl: 'https://as1.ftcdn.net/v2/jpg/05/52/93/60/1000_F_552936066_p3cr1C2M8ZpuXeEbIJa8EICZ0r7SHhSq.jpg', house: 'Ravenclaw' },
  { name: 'John', imageUrl: 'https://nerdsonearth.com/wp-content/uploads/2015/01/Gandalf.jpg', house: 'Hufflepuff' },
  { name: 'Parker', imageUrl: 'https://img.freepik.com/premium-photo/ai-generated-image-elderly-sorcerer-wizard-practicing-his-magic-tricks-his-laboratory_252214-3186.jpg', house: 'Gryffindor' },
  { name: 'Donny', imageUrl: 'https://images.nightcafe.studio/jobs/rEDF7l4WYgBv62EDVwCn/rEDF7l4WYgBv62EDVwCn--1--9xrwo.jpg?tr=w-1600,c-at_max', house: 'Slytherin' }
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

function addNewCard() {
  const nameInput = document.getElementById('exampleInput');
  const imageInput = document.getElementById('examplePassword');

  const studentName = nameInput.value;
  const imageUrl = imageInput.value;
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];

  if (studentName && imageUrl) {
    const newCard = createCard(studentName, imageUrl, randomHouse);
    renderCardToDOM(newCard);

    nameInput.value = ''; // Clear input after adding
    imageInput.value = ''; // Clear input after adding
  } else {
    console.error('Please enter both the Student Name and Image URL.');
  }
}

document.getElementById('form-submit').addEventListener('click', addNewCard);

document.getElementById('add-pet-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  addNewCard();
});


function moveCardToVManSection(card) {
  const vMansArmySection = document.getElementById('vMansArmy');
  if (vMansArmySection) {
    if (!card.classList.contains('expelled-card')) {
      const cardToMove = card.cloneNode(true);
      card.classList.add('expelled-card');
      vMansArmySection.appendChild(cardToMove);
      card.remove(); // Remove card from the init section
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
const filter = (thisHouse) => {
  let studentArray = [];
  if (thisHouse === "all") {
    renderToDom(studentWizards); // Assume studentWiz is an arr all students
  } else {
    studentArray = studentWizards.filter(student => student.house == thisHouse);
    hogwarts.innerHTML = "";
    renderToDom(studentArray);
  }
};

// Assuming you have buttons for each house
document.getElementById('gryffindor').addEventListener('click', () => {
  filter('Gryffindor');
});

document.getElementById('hufflepuff').addEventListener('click', () => {
  filter('Hufflepuff');
});

document.getElementById('ravenclaw').addEventListener('click', () => {
  filter('Ravenclaw');
});

document.getElementById('slytherin').addEventListener('click', () => {
  filter('Slytherin');
});

document.getElementById('allWizards').addEventListener('click', () => {
  filter('all');
});
// Function render the cards
function renderToDOM(studentArray) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = '';

  studentArray.forEach(student => {
    const cardElement = createCard(student.name, student.imageUrl, student.house);
    appDiv.appendChild(cardElement);
  });
}

function sortStudentsByHouse(house) {
  const sortedStudents = firstYearWizards.filter(student => student.house.toLowerCase() === house);
  renderToDOM(sortedStudents);
}

const houseButtons = document.querySelectorAll("#button-group button");
houseButtons.forEach(button => {
  button.addEventListener("click", () => {
    const house = button.id;
    sortStudentsByHouse(house);
  });
});
document.getElementById('allWizards').addEventListener('click', () => {
  renderToDOM(firstYearWizards);
});

renderToDOM(firstYearWizards);
});
