export const petCard = document.createElement("div");
      petCard.classList.add("card");
      petCard.innerHTML = `
      <div class="card" style="width: 15rem; height: 17rem;">
      <img src="${firstYearWiz.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${firstYearWiz.name}</h5>
        <p class="card-text">House: ${firstYearWiz.house}</p>
        <a href="#" class="btn btn-danger">Expel</a>
      </div>
    </div>`;