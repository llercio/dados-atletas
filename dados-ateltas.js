class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }
  calculaIMC() {
    let imc = this.peso / (this.altura * this.altura);
    return imc;
  }
  calculaMediaValida() {
    let media = 0;
    let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
    let notasSelecionadas = notasOrdenadas.slice(1, 4);

    notasSelecionadas.forEach(function (nota) {
      media = media + nota;
    });
    let mediaValida = media / notasSelecionadas.length;
    return mediaValida;
  }
  obtemNomeAtleta() {
    return this.nome;
  }
  obtemIdadeAtleta() {
    return this.idade;
  }
  obtemPesoAtleta() {
    return this.peso;
  }
  obtemNotasAtleta() {
    return this.notas;
  }
  obtemCategoria() {
    return this.calculaCategoria();
  }
  obtemIMC() {
    return this.calculaIMC();
  }
  obtemMediaValida() {
    return this.calculaMediaValida();
  }

  dadosDosAtletas() {
    return `
    Nome: ${this.obtemNomeAtleta()}
    Idade: ${this.obtemIdadeAtleta()}
    Peso: ${this.obtemPesoAtleta()}
    Altura: ${this.altura}
    Notas: ${this.obtemNotasAtleta()}
    Categoria: ${this.obtemCategoria()}
    IMC: ${this.obtemIMC()}
    Média válida: ${this.obtemMediaValida()}`;
  }
}
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88],
);

console.log(atleta.dadosDosAtletas());
