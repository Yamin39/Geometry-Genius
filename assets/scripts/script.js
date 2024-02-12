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

// Triangle

function calculateTriangleArea() {
  const areaOfTriangle =
    0.5 * getValueById("triangle-base") * getValueById("triangle-height");
  displayValueById("triangle-display", areaOfTriangle);
}

document
  .getElementById("triangle-height")
  .addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      calculateTriangleArea();
    }
  });

// Rectangle

function calculateRectangleArea() {
  const area =
    getValueById("rectangle-width") * getValueById("rectangle-length");
  displayValueById("rectangle-display", area);
}

document
  .getElementById("rectangle-length")
  .addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      calculateRectangleArea();
    }
  });

// Parallelogram

function calculateParallelogramArea() {
  const area =
    getValueById("parallelogram-base") * getValueById("parallelogram-height");
  displayValueById("parallelogram-display", area);
}

document
  .getElementById("parallelogram-height")
  .addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      calculateParallelogramArea();
    }
  });

// Rhombus

function calculateRhombusArea() {
  const area = 0.5 * getValueById("rhombus-d1") * getValueById("rhombus-d2");
  displayValueById("rhombus-display", area);
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
}

document.getElementById("ellipse-b").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    calculateEllipseArea();
  }
});
