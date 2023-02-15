function checkSign(n) {
    if (n < 0) {

      console.log("Negatif");
    } else  {
        console.log("Positif");
      }
    }
     
    checkSign(-4);    // affiche "Negatif" dans la console
    checkSign(0);    // affiche "Positif" dans la console
    checkSign(4);    // affiche "Positif" dans la console

    module.exports = checkSign