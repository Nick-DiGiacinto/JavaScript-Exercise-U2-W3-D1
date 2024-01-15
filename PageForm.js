const inputName = document.getElementById("inputName");
const inputOwner = document.getElementById("inputOwner");
const inputSpecies = document.getElementById("inputSpecies");
const inputBreed = document.getElementById("inputBreed");
const submitButton = document.querySelector("form button");


const animalData = [];

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  hasSameOwner(anotherPet) {
    return this.ownerName.toLowerCase() === anotherPet.ownerName.toLowerCase();
  }
}

const petCard = function () {
  const row = document.getElementById("pet-card");
  row.innerHTML = "";

  animalData.forEach((pet) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");

    newCol.innerHTML = `<div class="card">
    <div class="card-body">
      <h5 class="card-title">Pet Name</h5>
      <p class="card-text" id="pet-name">${pet.petName}</p>
      <h5 class="card-title">Owner Name</h5>
      <p class="card-text" id="owner-name">${pet.ownerName}</p>
      <h5 class="card-title">Species</h5>
      <p class="card-text" id="pet-species">${pet.species}</p>
      <h5 class="card-title">Breed</h5>
      <p class="card-text" id="pet-breed">${pet.breed}</p>
    </div>
  </div>`;
    row.appendChild(newCol);
  });
  inputName.value = "";
  inputOwner.value = "";
  inputSpecies.value = "";
  inputBreed.value = "";
};

const petForm = document.getElementById("form");
petForm.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const newPet = new Pets(
    inputName.value,
    inputOwner.value,
    inputSpecies.value,
    inputBreed.value
  );

  const hasSameOwner = animalData.some((pet) => newPet.hasSameOwner(pet));

  if (!hasSameOwner) {
    animalData.push(newPet);
    petCard();
  } else {
    alert("Another pet with the same owners already exist");
  }

  animalData.push(newPet);
  petCard();
});