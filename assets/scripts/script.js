tailwind.config = {
  theme: {
    extend: {
      colors: {
        "light-blue": "#1090D8",
      },
    },
  },
};

function getValueById(elementId) {
  return Number(document.getElementById(elementId).value);
}

function displayValueById(displayId, calculatedValue) {
  return (document.getElementById(displayId).innerText = calculatedValue);
}

function displayToAreaCalculation(shapeName, inputOne, inputTwo, area) {
  if (document.getElementById(inputOne).value !== "" && document.getElementById(inputTwo).value !== "") {
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "newLi");
    const counter = document.querySelectorAll("#area-calc-container li").length + 1 + ".";
    newLi.innerHTML = `<span>${counter} ${shapeName} <span class="areaCalcDisplay">${area}cm<sup>2</sup></span></span> <button
    id="convertC2M-btn" class="btn bg-light-blue btn-info text-white min-h-0 h-fit py-2 text-sm font-medium"">Covert to m<sup>2</sup></button>
    `;
    document.getElementById("area-calc-container").appendChild(newLi);
    // convert cm square to m square when button is clicked
    document.getElementById("area-calc-container").addEventListener("click", function (event) {
      if (event.target.id === "convertC2M-btn") {
        const areaDisplay = (area * 0.0001).toFixed(4);
        const areaCalcDisplay = event.target.parentNode.childNodes[0].childNodes[1];
        areaCalcDisplay.innerHTML = `${areaDisplay}m<sup>2</sup>`;
      }
    });
  }
}

// Triangle

function calculateTriangleArea() {
  const areaOfTriangle = 0.5 * getValueById("triangle-base") * getValueById("triangle-height");
  displayValueById("triangle-display", areaOfTriangle);
  displayToAreaCalculation("Triangle", "triangle-base", "triangle-height", areaOfTriangle);
}

document.getElementById("triangle-height").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    calculateTriangleArea();
  }
});

// Rectangle

function calculateRectangleArea() {
  const area = getValueById("rectangle-width") * getValueById("rectangle-length");
  displayValueById("rectangle-display", area);
  displayToAreaCalculation("Rectangle", "rectangle-width", "rectangle-length", area);
}

document.getElementById("rectangle-length").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    calculateRectangleArea();
  }
});

// Parallelogram

function calculateParallelogramArea() {
  const area = getValueById("parallelogram-base") * getValueById("parallelogram-height");
  displayValueById("parallelogram-display", area);
  displayToAreaCalculation("Parallelogram", "parallelogram-base", "parallelogram-height", area);
}

document.getElementById("parallelogram-height").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    calculateParallelogramArea();
  }
});

// Rhombus

function calculateRhombusArea() {
  const area = 0.5 * getValueById("rhombus-d1") * getValueById("rhombus-d2");
  displayValueById("rhombus-display", area);
  displayToAreaCalculation("Rhombus", "rhombus-d1", "rhombus-d2", area);
}

document.getElementById("rhombus-d2").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    calculateRhombusArea();
  }
});

// Pentagon

function calculatePentagonArea() {
  const area = 0.5 * getValueById("pentagon-p") * getValueById("pentagon-a");
  displayValueById("pentagon-display", area);
  displayToAreaCalculation("Pentagon", "pentagon-p", "pentagon-a", area);
}

document.getElementById("pentagon-a").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    calculatePentagonArea();
  }
});

// Ellipse

function calculateEllipseArea() {
  const area = Math.PI * getValueById("ellipse-a") * getValueById("ellipse-b");
  displayValueById("ellipse-display", Number(area.toFixed(4)));
  displayToAreaCalculation("Ellipse", "ellipse-a", "ellipse-b", Number(area.toFixed(4)));
}

document.getElementById("ellipse-b").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    calculateEllipseArea();
  }
});

// Area calculation delete button

document.getElementById("remove-btn").addEventListener("click", () => {
  document.getElementById("area-calc-container").innerHTML = "";
});

//modal

function hideModal() {
  document.getElementById("modal").style.display = "none";
  document.querySelector("#modal div").style.display = "none";
}
