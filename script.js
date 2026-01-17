const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');
const clearBtn = document.getElementById('clearBtn');

let currentSize = 16;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(size) {
  container.innerHTML = '';
  currentSize = size;

  const containerSize = container.clientWidth;
  const squareSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener('click', () => {
  let userSize = prompt('Enter number of squares per side (max 100):');
  userSize = Number(userSize);

  if (!userSize || userSize < 1 || userSize > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  createGrid(userSize);
});

clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.square').forEach(square => {
    square.style.backgroundColor = 'white';
  });
});

createGrid(currentSize);