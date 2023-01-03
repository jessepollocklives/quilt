// Generate a random hex color code
const randomColor = () => {
  const hexDigits = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  let newColor = '#';
  let randomDigit;

  while (newColor.length < 7) {
    randomDigit = Math.floor(Math.random() * 15);
    newColor += hexDigits[randomDigit];
  }
  
  return newColor;
}

// Generate a list of up to 1000 random hex color codes
const randomColors = (num) => {
  const newColors = [];
  
  if (num > 1000) {
    num = 1000;
  }

  for (i = 0; i < num; i++) {
    newColors.push(randomColor());
  }
  
  return newColors;
}