let ChosenOption = ``;

// Funções
const AreaTriangulo = function (Base, Altura) {
  let Verifier = true;
  do {
    Base = parseFloat(prompt(`Informe a base do triângulo`));
    Altura = parseFloat(prompt(`Informe a altura do triângulo`));

    if (isNaN(Base) || isNaN(Altura)) {
      alert(`Digite somente números`);
    } else {
      let Soma = (Base * Altura) / 2;
      alert(
        `O triângulo de base:${Base}, e altura:${Altura} tem uma área de: ${Soma.toFixed(
          2
        )}`
      );
      return (Verifier = false);
    }
  } while (Verifier === true);
};
const AreaRetangulo = function (Base, Altura) {
  let Verifier = true;
  do {
    Base = parseFloat(prompt(`Informe a base do quadrado`));
    Altura = parseFloat(prompt(`Informe a altura do quadrado`));

    if (isNaN(Base) || isNaN(Altura)) {
      alert(`Digite somente números`);
    } else {
      let Soma = Base * Altura;
      alert(
        `O quadrado de base:${Base}, e altura:${Altura} tem uma área de: ${Soma.toFixed(
          2
        )}`
      );
      return (Verifier = false);
    }
  } while (Verifier === true);
};
const AreaQuadrado = function (Lado) {
  let Verifier = true;
  do {
    Lado = parseFloat(prompt(`Informe o lado do quadrado`));

    if (isNaN(Lado)) {
      alert(`Digite somente números`);
    } else {
      let Soma = Lado ** 2;
      alert(`O quadrado de lado: ${Lado}, tem área de: ${Soma.toFixed(2)}`);
      return (Verifier = false);
    }
  } while (Verifier === true);
};
const AreaCirculo = function (Raio) {
  let Verifier = true;
  do {
    Raio = parseFloat(prompt(`Informe o Raio do círculo`));

    if (isNaN(Raio)) {
      alert(`Digite somente números`);
    } else {
      let Soma = 3.14 * Raio ** 2;
      alert(`O círculo de raio: ${Raio}, tem área de: ${Soma.toFixed(2)}`);
      return (Verifier = false);
    }
  } while (Verifier === true);
};
const AreaTrapezio = function (BaseMaior, BaseMenor, Altura) {
  let Verifier = true;
  do {
    BaseMaior = parseFloat(prompt(`Informe a Base maior do trapézio`));
    BaseMenor = parseFloat(prompt(`Informe a Base menor do trapézio`));
    Altura = parseFloat(prompt(`Informe a Altura do trapézio`));

    if (isNaN(BaseMaior) || isNaN(BaseMenor) || isNaN(Altura)) {
      alert(`Digite somente números`);
    } else {
      let Soma = ((BaseMaior + BaseMenor) * Altura) / 2;
      alert(
        `O trapézio de base maior: ${BaseMaior}, base menor: ${BaseMenor}, e altura: ${Altura}, tem uma área de: ${Soma.toFixed(
          2
        )}`
      );
      return (Verifier = false);
    }
  } while (Verifier === true);
};
const AreaLosango = function (DiagonalMaior, DiagonalMenor) {
  let Verifier = true;
  do {
    DiagonalMaior = parseFloat(prompt(`Informe a Diagonal maior do losango`));
    DiagonalMenor = parseFloat(prompt(`Informe a Diagonal menor do losango`));

    if (isNaN(DiagonalMaior) || isNaN(DiagonalMenor)) {
      alert(`Digite somente números`);
    } else {
      let Soma = (DiagonalMenor * DiagonalMaior) / 2;
    }
  } while (Verifier === true);
};
const PerimetroTriangulo = function (Lado1, Lado2, Lado3) {
  let Verifier = true;
  do {
    Lado1 = parseFloat(prompt(`Informe o tamanho do primeiro lado`));
    Lado2 = parseFloat(prompt(`Informe o tamanho do segundo lado`));
    Lado3 = parseFloat(prompt(`Informe o tamanho do terceiro lado`));

    if (isNaN(Lado1) || isNaN(Lado2) || isNaN(Lado3)) {
      alert(`Digite somente números`);
    } else {
      let Soma = Lado1 + Lado2 + Lado3;
      alert(`O perímetro do triângulo é de: ${Soma}`);
      return (Verifier = false);
    }
  } while (Verifier === true);
};
const PerimetroQuadrado = function (Lado) {
  let Verifier = true
  do {
    Lado = parseFloat(prompt(`Informe o lado do quadrado`))

    if (isNaN(Lado)) {
      alert(`Digite somente números`)
    }
    else {
      let Soma = Lado * 4
      alert(`O perímetro do quadrado é de: ${Soma}`)
      return Verifier = false
    }
  } while(Verifier === true)
}
do {
  ChosenOption = parseInt(
    prompt(`Escolha uma opção abaixo
  1- Calcular a área do triângulo
  2- Calcular a área do retângulo
  3- Calcular a área do quadrado
  4- Calc ular a área do círculo
  5- Calcular a área do trapézio
  6- Calcular a área do losango
  7- Calcular Perimetro
  8- Sair`)
  );

  switch (ChosenOption) {
    case isNaN(ChosenOption) || ChosenOption >= 9 || ChosenOption <= 0:
      alert(`Digite somente números entre 1 a 8`);
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
        let CalcularPerimetro = parseInt(
          prompt(`
        1- Calcular Perimetro do Triângulo
        2- Calcular Perimetro do Retângulo
        3- Calcular Perimetro do Quadrado
        4- Calcular Perimetro do Círculo
        5- Calcular Perimetro do Trapézio
        6- Calcular Perimetro do Losango
        7- Sair `)
        );

        if (
          isNaN(CalcularPerimetro) ||
          CalcularPerimetro >= 8 ||
          CalcularPerimetro <= 0
        ) {
          alert(`Digite somente números entre 1 a 7`);
        } else if (CalcularPerimetro === 1) {
        }
      } while (CalcularPerimetro !== 7);
      break;
    case 8:
      alert(`Encerando...`);
      break;
    default:
      alert(`Um erro ocorreu :(`);
      break;
  }
} while (ChosenOption !== 8);
