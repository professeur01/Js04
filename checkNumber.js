function checkNumber(n) {
    if (n < 5) {
      console.log("Faible");
    } else if (n === 5 || n === 6) {
      console.log("Moyen");
    } else {
        console.log("moyen");
    }
  }
  
  // Exemple d'utilisation :
  checkNumber(3); // affiche "Faible" dans la console
  checkNumber(5); // affiche "Eleve" dans la console
  checkNumber(6); // affiche "Elevé" dans la console

  module.exports = checkNumber