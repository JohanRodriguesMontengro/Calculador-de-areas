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
  let Verifier = true
  do {
    Lado = parseFloat(prompt(`Informe o lado do quadrado`))

    if (isNaN(Altura)) {
      alert(`Digite somente números`)
    }
    else {
      let Soma = Lado ** 2
      alert(`O quadrado de lado: ${Lado}, tem altura de: ${Soma.toFixed(2)}`)
      return Verifier = false;
    }
  }while(Verifier === true)
 }
do {
  ChosenOption = parseInt(
    prompt(`Escolha uma opção abaixo
  1- Calcular a área do triângulo
  2- Calcular a área do retângulo
  3- Calcular a área do quadrado
  4- Calcular a área do círculo
  5- Calcular a área do trapézio
  6- Calcular a área do losango
  7- Sair`)
  );

  if (isNaN(ChosenOption) || ChosenOption >= 8 || ChosenOption <= 0) {
    alert(`Digite somente números entre 1 a 7`);
  } else if (ChosenOption === 1) {
    AreaTriangulo();
  } else if (ChosenOption === 2) {
    AreaRetangulo();
  } else if (ChosenOption === 3) {
    AreaQuadrado()
  } else if (ChosenOption === 4) {
    AreaCirculo()
  } else if (ChosenOption === 5) {
    AreaTrapezio()
  } else if (ChosenOption === 6) {
    AreaLosango()
  } else if (ChosenOption === 7) {
    alert(`Encerando...`);
  }
} while (ChosenOption !== 7);
