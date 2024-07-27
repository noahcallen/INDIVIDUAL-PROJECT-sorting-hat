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
    student.house === 'Hufflepuff' ? 'Hufflepuff-house':
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
            <button type="button" class="btn btn-danger id="${student.id}">Expel</button>
          </div>
        </div>
      </div>
    </div>`;
  }
  renderToDom("#app", domString);
}//close cardsOnDom

cardsOnDom(students);
