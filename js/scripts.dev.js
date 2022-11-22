"use strict";

var ChosenOption = ""; // Funções

var AreaTriangulo = function AreaTriangulo(Base, Altura) {
  var Verifier = true;

  do {
    Base = parseFloat(prompt("Informe a base do tri\xE2ngulo"));
    Altura = parseFloat(prompt("Informe a altura do tri\xE2ngulo"));

    if (isNaN(Base) || isNaN(Altura)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = Base * Altura / 2;
      alert("O tri\xE2ngulo de base:".concat(Base, ", e altura:").concat(Altura, " tem uma \xE1rea de: ").concat(Soma.toFixed(2)));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var AreaRetangulo = function AreaRetangulo(Base, Altura) {
  var Verifier = true;

  do {
    Base = parseFloat(prompt("Informe a base do quadrado"));
    Altura = parseFloat(prompt("Informe a altura do quadrado"));

    if (isNaN(Base) || isNaN(Altura)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = Base * Altura;
      alert("O quadrado de base:".concat(Base, ", e altura:").concat(Altura, " tem uma \xE1rea de: ").concat(Soma.toFixed(2)));
      return Verifier = false;
    }
  } while (Verifier === true);
};

do {
  ChosenOption = parseInt(prompt("Escolha uma op\xE7\xE3o abaixo\n  1- Calcular a \xE1rea do tri\xE2ngulo\n  2- Calcular a \xE1rea do ret\xE2ngulo\n  3- Calcular a \xE1rea do quadrado\n  4- Calcular a \xE1rea do c\xEDrculo\n  5- Calcular a \xE1rea do trap\xE9zio\n  6- Calcular a \xE1rea do losango\n  7- Sair"));

  if (isNaN(ChosenOption) || ChosenOption >= 8 || ChosenOption <= 0) {
    alert("Digite somente n\xFAmeros entre 1 a 7");
  } else if (ChosenOption === 1) {
    AreaTriangulo();
  } else if (ChosenOption === 2) {
    AreaRetangulo();
  } else if (ChosenOption === 3) {} else if (ChosenOption === 4) {} else if (ChosenOption === 5) {} else if (ChosenOption === 6) {} else if (ChosenOption === 7) {
    alert("Encerando...");
  }
} while (ChosenOption !== 7);