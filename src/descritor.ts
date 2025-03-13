import Empresa from "./empresa.js";

export default class Descritor {
  private empresa: Empresa;

  constructor(empresa: Empresa) {
    this.empresa = empresa;
  }

  descrever(): void {
    console.log();

    console.log(
      "#############################################################################################################"
    );
    console.log(
      "############################################## DESCRIÇÃO DA EMPRESA #########################################"
    );
    console.log(
      "#############################################################################################################"
    );
    console.log();
    console.log(`Razão Social: ${this.empresa.razaoSocial}`);
    console.log(`Nome Fantasia: ${this.empresa.nomeFantasia}`);
    console.log(`CNPJ: ${this.empresa.cnpj}`);
    console.log(`Endereço:`);
    console.log(
      `Rua: ${this.empresa.endereco.rua} Bairro: ${this.empresa.endereco.bairro} Cidade: ${this.empresa.endereco.cidade} Numero: ${this.empresa.endereco.numero}`
    );
    console.log();
    console.log();

    console.log("Funcionários:");

    this.empresa.funcionarios.forEach((funcionario) => {
      console.log();
      console.log();

      console.log(`Nome: ${funcionario.nome}`);
      console.log(`Matrícula: ${funcionario.matricula}`);
      console.log(`CPF: ${funcionario.cpf}`);
      console.log(`Endereço:`);
      console.log(
        `Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} Numero: ${funcionario.endereco.numero}`
      );
    });

    console.log();
  }
}