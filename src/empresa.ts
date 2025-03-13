import Endereco from "./endereco"
import Funcionario from "./funcionario"
import Telefone from "./telefone"

export default class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionario: Funcionario

    construct(razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco, funcionario: Funcionario){
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.funcionario = funcionario
    }
}