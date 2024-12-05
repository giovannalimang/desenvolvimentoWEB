class Fornecedor{
    //construtor da classe
    constructor (nome='sem nome',fone='(00)-0000-0000'){
        this.nome=nome
        this.fone=fone
    }
    // criação dos métodos set
    setNome(nome){
        this.nome=nome
    }
    setFone(fone){
        this.fone=fone
    }
    // criação dos métodos get
    getNome(){
        return this.nome
    }
    getFone(){
        return this.fone
    }

}
export default Fornecedor