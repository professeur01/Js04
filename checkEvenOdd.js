function checkEvenOdd(nombre) {
    if (nombre % 2 === 0) {
      return "pair";
    } else {
      return "impair";
    }
  }
  
  console.log(checkEvenOdd(5)); // affiche "impair"
  console.log(checkEvenOdd(2)); // affiche "pair"

  module.exports = checkEvenOdd