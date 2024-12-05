import Fornecedor from "./Fornecedor.js";
import FornecedorPessoa from "./FornecedorPessoa.js";
//criando objeto
const fornecedor=new Fornecedor("Gabys","(00)-0000-0000")
console.log (`Dados do fornecedor:
Nome :${fornecedor.getNome()}
Fone :${fornecedor.getNome()}`)

const fornecedorPessoa=new FornecedorPessoa("Miranda","(00)-0000-0000","12.165.789-6","123.456.789-00")
console.log (`Dados do fornecedorPessoa:
Nome :${fornecedorPessoa.getNome()}
Fone :${fornecedorPessoa.getFone()}
CPF :${fornecedorPessoa.getcpf()}
RG :${fornecedorPessoa.getrg()}`)
