import Endereco from "./endereco.js"
import Funcionario from "./funcionario.js"
import Telefone from "./telefone.js"
import Empresa from "./empresa.js"
import Descritor from "./descritor.js"


let endereco = new Endereco(221, 'Luis Gonzaga Azevedo', 'Jardim Imperial', 'São José dos Campos')
let telefone = new Telefone('12', '996082242')
let funcionario1 = new Funcionario('Eduardo Fonseca Ribeiro', '123456789', '400.049.858-42', endereco, telefone)
let funcionario2 = new Funcionario('Pedro Rocha Pirez', '987654321', '162.783.628-48', endereco, telefone)

let funcionarios: Funcionario[] = []
funcionarios.push(funcionario1, funcionario2)

const empresa = new Empresa('Mercado Online', 'ABC LTDA', '999-999-999-999-99', endereco, funcionarios)

const descritor = new Descritor(empresa);

descritor.descrever();