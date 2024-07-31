//setup array to hold students, starting with main chars from HP
const students = [
  {
    id:1,
    name: "Harry Potter",
    imageURL: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/09/12/17/potter.jpg",
    house: "Gryffindor",
  },
  {
    id:2,
    name: "Cedric Diggory",
    imageURL: "https://static.wikia.nocookie.net/p__/images/c/ca/Cedric_Diffory_%22such_a_handsome_boy%22.jpeg/revision/latest?cb=20160306120749&path-prefix=protagonist",
    house: "Hufflepuff",
  },
  {
    id:3,
    name: "Ron Weasley",
    imageURL: "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
    house: "Gryffindor",
  },
  {
    id:4,
    name: "Draco Malfoy",
    imageURL: "https://i.insider.com/6144f90fe3da2d0018399529?width=800&format=jpeg&auto=webp",
    house: "Slytherin",
  },
  {
    id:5,
    name: "Draco Malfoy",
    imageURL: "https://i.insider.com/6144f90fe3da2d0018399529?width=800&format=jpeg&auto=webp",
    house: "Slytherin",
  },
  {
    id:6,
    name: "Luna Lovegood",
    imageURL: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/03/1484752358-luna-lovegood.jpg",
    house: "Ravenclaw",
  }
];

const expelled = [
  {
    id: 1,
    name: "Lord Voldemort",
    imageURL: "https://static.wikia.nocookie.net/harry-potter-fanfiction123/images/7/78/Lord_Voldemort.jpg/revision/latest?cb=20230428021736",
    house: "Expelled",
  }
]

//add renderToDOM to Render Cards

// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};//close RenderToDOM

//create cardsOnDOM 
const cardsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    const houseClass =
    student.house === 'Ravenclaw' ? 'Ravenclaw-house' :
    student.house === 'Slytherin' ? 'Slytherin-house' :
    student.house === 'Gryffindor' ? 'Gryffindor-house':
    student.house === 'Hufflepuff' ? 'Hufflepuff-house': '';
    domString += 
    `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${student.imageURL}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text ${houseClass}">${student.house}</p>
            <button type="button" class="btn btn-danger id="expel--${student.id}">Expel</button>
          </div>
        </div>
      </div>
    </div>`;
  }
  renderToDom("#app", domString);
}//close cardsOnDom

cardsOnDom(students);//calling to render cards on initial page load

//expelled cardsOnDom 
const cardsOnDom2 = (array) => {
  let domString = "";
  for (const expelledStudent of array) {
    domString += 
    `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${expelledStudent.imageURL}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${expelledStudent.name}</h5>
            <p class="card-text">${expelledStudent.house}</p>
            <button type="button" class="btn btn-danger" id="delete--${expelledStudent.id}">Delete</button>
          </div>
        </div>
      </div>
    </div>`;
  }
  renderToDom("#app2", domString);
}// Close expelledCardsOnDom

cardsOnDom2(expelled);


//start create student function

//form 
const form = document.querySelector('form');

const createStudent = (taco) => {
  taco.preventDefault();
  const newStudentObj = {
    id: students.length + 1,
    name: document.querySelector('#student-name').value,
    imageURL: document.querySelector('#student-img').value,
    house: document.querySelector('#student-house').value,
  }
  students.push(newStudentObj);
  cardsOnDom(students);
  form.reset();
};
//listen for the sort button click 
form.addEventListener('submit', createStudent);
//close create new card

app.addEventListener('click', (taco) => {
  console.log('Event Target:', taco.target); // Check the clicked element

  if (taco.target.id.includes('expel')) {
    const [, id] = taco.target.id.split('--');
    const index = students.findIndex(taco => taco.id === Number(id));
    console.log('Index:', index); // Check the index

    if (index !== -1) { // Check for valid index before splicing
      const expelledStudent = students.splice(index, 1)[0]; // Extract the student
      expelled.push(expelledStudent);

      console.log('Expelled Student:', expelledStudent); // Add this line

      // Re-render cards after changes
      cardsOnDom(students);
      cardsOnDom2(expelled);
    } else {
      console.error('Student not found'); // Handle invalid index
    }

    taco.stopPropagation(); // Prevent event bubbling
  }
});
