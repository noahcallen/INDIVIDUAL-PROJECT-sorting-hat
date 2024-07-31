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
    imageURL: "https://upload.wikimedia.org/wikipedia/en/f/f7/Cedric_Diggory.jpeg",
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
    name: "Luna Lovegood",
    imageURL: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/03/1484752358-luna-lovegood.jpg",
    house: "Ravenclaw",
  }
];

const expelled = [
  {
    id:1,
    name: "Lord Voldemort",
    imageURL: "https://i.pinimg.com/564x/e1/d5/bf/e1d5bf2a5b02bdca1ec48c9b46dca16a.jpg",
    house: "Dark-Army",
  }
]

//add renderToDOM to Render Cards

// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};//close RenderToDOM

//create cardsOnDOM 
const cardsOnDom = (array, divId) => {
  let domString = array.map(student => {//map is attached to the array (students/expelled arrays) & iterating through them
    const houseClass =
      student.house === 'Ravenclaw' ? 'Ravenclaw-house' :
      student.house === 'Slytherin' ? 'Slytherin-house' :
      student.house === 'Gryffindor' ? 'Gryffindor-house' :
      student.house === 'Hufflepuff' ? 'Hufflepuff-house' :
      student.house === 'Dark-Army' ? 'Dark-Army-house' : '';
      //taking each student obj and converting them into a HTML string
    return `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${student.imageURL}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text ${houseClass}">${student.house}</p>
            <button type="button" class="btn btn-danger" id="expel--${student.id}">Expel</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');//join is putting the now students HTML string into the cards
  renderToDom(divId, domString);
};

// Initial render to show both students & expelled students on load of page
cardsOnDom(students, '#app');
cardsOnDom(expelled, '#app2');

//function for expel 
document.querySelector('#app').addEventListener('click', (e) => {
  if (e.target.id.includes('expel')) {
    const [, id] = e.target.id.split('--');
    const index = students.findIndex(student => student.id === Number(id));
    if (index !== -1) {
      const expelledStudent = students.splice(index, 1)[0];
      expelled.push(expelledStudent);
      // Re-render both arrays
      cardsOnDom(students, '#app');
      cardsOnDom(expelled, '#app2');
    }
  }
});
