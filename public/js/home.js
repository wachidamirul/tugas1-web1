document.addEventListener("DOMContentLoaded", () => {
  getCountVehicles();
  getMerek();
  getModelName();
});

function getCountVehicles() {
  const totalMotor = document.getElementById("total-motor");
  fetch("../data.json")
    .then((response) => response.json())
    .then((json) => {
      totalMotor.innerHTML = json.length + " Motor";
    });
}

function getMerek() {
  const merek = document.getElementById("merek");
  fetch("../data.json")
    .then((response) => response.json())
    .then((json) => {
      let brands = json.map((item) => item.model.brand);
      let uniqueBrands = [...new Set(brands)];
      uniqueBrands.forEach((uniqueBrands) => {
        merek.innerHTML += `<option value="${uniqueBrands}">${uniqueBrands}</option>`;
      });
    });
}

function getModelName() {
  const model = document.getElementById("model");
  fetch("../data.json")
    .then((response) => response.json())
    .then((json) => {
      let name = json.map((item) => item.model.name);
      let uniqueNames = [...new Set(name)];
      uniqueNames.forEach((uniqueNames) => {
        model.innerHTML += `<option value="${uniqueNames}">${uniqueNames}</option>`;
      });
    });
}
