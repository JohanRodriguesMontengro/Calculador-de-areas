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

var AreaQuadrado = function AreaQuadrado(Lado) {
  var Verifier = true;

  do {
    Lado = parseFloat(prompt("Informe o lado do quadrado"));

    if (isNaN(Lado)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = Math.pow(Lado, 2);
      alert("O quadrado de lado: ".concat(Lado, ", tem \xE1rea de: ").concat(Soma.toFixed(2)));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var AreaCirculo = function AreaCirculo(Raio) {
  var Verifier = true;

  do {
    Raio = parseFloat(prompt("Informe o Raio do c\xEDrculo"));

    if (isNaN(Raio)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = 3.14 * Math.pow(Raio, 2);
      alert("O c\xEDrculo de raio: ".concat(Raio, ", tem \xE1rea de: ").concat(Soma.toFixed(2)));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var AreaTrapezio = function AreaTrapezio(BaseMaior, BaseMenor, Altura) {
  var Verifier = true;

  do {
    BaseMaior = parseFloat(prompt("Informe a Base maior do trap\xE9zio"));
    BaseMenor = parseFloat(prompt("Informe a Base menor do trap\xE9zio"));
    Altura = parseFloat(prompt("Informe a Altura do trap\xE9zio"));

    if (isNaN(BaseMaior) || isNaN(BaseMenor) || isNaN(Altura)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = (BaseMaior + BaseMenor) * Altura / 2;
      alert("O trap\xE9zio de base maior: ".concat(BaseMaior, ", base menor: ").concat(BaseMenor, ", e altura: ").concat(Altura, ", tem uma \xE1rea de: ").concat(Soma.toFixed(2)));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var AreaLosango = function AreaLosango(DiagonalMaior, DiagonalMenor) {
  var Verifier = true;

  do {
    DiagonalMaior = parseFloat(prompt("Informe a Diagonal maior do losango"));
    DiagonalMenor = parseFloat(prompt("Informe a Diagonal menor do losango"));

    if (isNaN(DiagonalMaior) || isNaN(DiagonalMenor)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = DiagonalMenor * DiagonalMaior / 2;
    }
  } while (Verifier === true);
};

do {
  ChosenOption = parseInt(prompt("Escolha uma op\xE7\xE3o abaixo\n  1- Calcular a \xE1rea do tri\xE2ngulo\n  2- Calcular a \xE1rea do ret\xE2ngulo\n  3- Calcular a \xE1rea do quadrado\n  4- Calcular a \xE1rea do c\xEDrculo\n  5- Calcular a \xE1rea do trap\xE9zio\n  6- Calcular a \xE1rea do losango\n  7- Sair"));

  switch (ChosenOption) {
    case isNaN(ChosenOption) || ChosenOption >= 8 || ChosenOption <= 0:
      alert("Digite somente n\xFAmeros entre 1 a 7");
      break;

    case 1:
      AreaTriangulo();
      break;

    case 2:
      AreaRetangulo();
      break;

    case 3:
      AreaQuadrado();
      break;

    case 4:
      AreaCirculo();
      break;

    case 5:
      AreaTrapezio();
      break;

    case 6:
      AreaTrapezio();
      break;

    case 7:
      alert("Encerando...");
      break;

    default:
      alert("Um erro ocorreu :(");
      break;
  }
} while (ChosenOption !== 7);