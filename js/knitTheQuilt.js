
let quilt = document.getElementById('quilt');

const makeSquare = () => {
  let squareDiv = document.createElement('div');
  squareDiv.className = 'quilt-square';
  quilt.appendChild(squareDiv);
};

const makeQuilt = () => {
  let i = 0;
  while (i < 144) {
    makeSquare();
    i++;
  }
}

makeQuilt();

let quiltSquare = document.getElementsByClassName('quilt-square');

const newQuilt = () => {
  for (i = 0; i < quiltSquare.length; i++) {
    quiltSquare[i].style.backgroundColor = randomColor();
  }
};

newQuilt();

quilt.onclick = newQuilt;
