//importar classe Fornecedor
import Fornecedor from "./Fornecedor.js"

class FornecedorEmpresa extends Fornecedor{
    //construtor da classe
    constructor (nome='sem nome',fone='(00)-0000-0000',rg='12.345.742-6',cpf='123.456.789-00'){
        super(nome,fone)
        this.rg=rg
        this.cpf=cpf
    }
    // criação dos métodos set
    setrg(rg){
        this.rg=rg
    }
    setcpf(cpf){
        this.cpf=cpf
    }
    // criação dos métodos get
    getrg(){
        return this.rg
    }
    getcpf(){
        return this.cpf
    }

}
export default FornecedorPessoa