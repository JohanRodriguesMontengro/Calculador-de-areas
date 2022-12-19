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

var PerimetroTriangulo = function PerimetroTriangulo(Lado1, Lado2, Lado3) {
  var Verifier = true;

  do {
    Lado1 = parseFloat(prompt("Informe o tamanho do primeiro lado"));
    Lado2 = parseFloat(prompt("Informe o tamanho do segundo lado"));
    Lado3 = parseFloat(prompt("Informe o tamanho do terceiro lado"));

    if (isNaN(Lado1) || isNaN(Lado2) || isNaN(Lado3)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = Lado1 + Lado2 + Lado3;
      alert("O per\xEDmetro do tri\xE2ngulo \xE9 de: ".concat(Soma));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var PerimetroRetangulo = function PerimetroRetangulo(Base, Altura) {
  var Verifier = true;

  do {
    Base = parseFloat(prompt("Informe a base do ret\xE2ngulo"));
    Altura = parseFloat(prompt("Informe a altura do ret\xE2ngulo"));

    if (isNaN(Base) || isNaN(Altura)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = 2 * (Base + Altura);
      alert("O per\xEDmetro do tri\xE2ngulo \xE9 de: ".concat(Soma));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var PerimetroQuadrado = function PerimetroQuadrado(Lado) {
  var Verifier = true;

  do {
    Lado = parseFloat(prompt("Informe o lado do quadrado"));

    if (isNaN(Lado)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = Lado * 4;
      alert("O per\xEDmetro do quadrado \xE9 de: ".concat(Soma));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var PerimetroCirculo = function PerimetroCirculo(Raio) {
  var Verifier = true;

  do {
    Raio = parseFloat(prompt("Informe o raio do c\xEDrculo"));

    if (isNaN(Raio)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = 2 * 3.14 * Raio;
      alert("O per\xEDmetro do c\xEDrculo \xE9 de: ".concat(Soma));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var PerimetroTrapezio = function PerimetroTrapezio(TopoDoTrapézio, BaseDoTrapézio, InclinaçãoEsquerdaDoTrapézio, InclinaçãoDireitaDoTrapézio) {
  var Verifier = true;

  do {
    TopoDoTrapézio = parseFloat(prompt("Informe o topo do trap\xE9zio"));
    BaseDoTrapézio = parseFloat(prompt("Informe a base do trap\xE9zio"));
    InclinaçãoEsquerdaDoTrapézio = parseFloat(prompt("Informe a inclina\xE7\xE3o do lado esquerdo do trap\xE9zio"));
    InclinaçãoDireitaDoTrapézio = parseFloat(prompt("Informe a inclina\xE7\xE3o do lado direito do trap\xE9zio"));

    if (isNaN(TopoDoTrapézio) || isNaN(BaseDoTrapézio) || isNaN(InclinaçãoEsquerdaDoTrapézio) || isNaN(InclinaçãoDireitaDoTrapézio)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = TopoDoTrapézio + BaseDoTrapézio + InclinaçãoEsquerdaDoTrapézio + InclinaçãoDireitaDoTrapézio;
      alert("O per\xEDmetro do trap\xE9zio \xE9 de: ".concat(Soma));
      return Verifier = false;
    }
  } while (Verifier === true);
};

var PerimetroLosango = function PerimetroLosango(Lado) {
  var Verifier = true;

  do {
    Lado = parseFloat(prompt("Informe o lado do losango"));

    if (isNaN(Lado)) {
      alert("Digite somente n\xFAmeros");
    } else {
      var Soma = Lado * 4;
      alert("O per\xEDmetro do losango \xE9 de: ".concat(Soma));
      return Verifier = false;
    }
  } while (Verifier === true);
};

do {
  ChosenOption = parseInt(prompt("Escolha uma op\xE7\xE3o abaixo\n  1- Calcular a \xE1rea do tri\xE2ngulo\n  2- Calcular a \xE1rea do ret\xE2ngulo\n  3- Calcular a \xE1rea do quadrado\n  4- Calc ular a \xE1rea do c\xEDrculo\n  5- Calcular a \xE1rea do trap\xE9zio\n  6- Calcular a \xE1rea do losango\n  7- Calcular Perimetro\n  8- Sair"));

  switch (ChosenOption) {
    case isNaN(ChosenOption) || ChosenOption >= 9 || ChosenOption <= 0:
      alert("Digite somente n\xFAmeros entre 1 a 8");
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
      do {
        var _CalcularPerimetro = parseInt(prompt("\n        1- Calcular Perimetro do Tri\xE2ngulo\n        2- Calcular Perimetro do Ret\xE2ngulo\n        3- Calcular Perimetro do Quadrado\n        4- Calcular Perimetro do C\xEDrculo\n        5- Calcular Perimetro do Trap\xE9zio\n        6- Calcular Perimetro do Losango\n        7- Sair "));

        if (isNaN(_CalcularPerimetro) || _CalcularPerimetro >= 8 || _CalcularPerimetro <= 0) {
          alert("Digite somente n\xFAmeros entre 1 a 7");
        } else if (_CalcularPerimetro === 1) {
          PerimetroTriangulo();
        } else if (_CalcularPerimetro === 2) {
          PerimetroRetangulo();
        } else if (_CalcularPerimetro === 3) {
          PerimetroQuadrado();
        } else if (_CalcularPerimetro === 4) {
          PerimetroCirculo();
        } else if (_CalcularPerimetro === 5) {
          PerimetroTrapezio();
        } else if (_CalcularPerimetro === 6) {
          PerimetroLosango();
        }
      } while (CalcularPerimetro !== 7);

      break;

    case 8:
      alert("Encerando...");
      break;

    default:
      alert("Um erro ocorreu :(");
      break;
  }
} while (ChosenOption !== 8);