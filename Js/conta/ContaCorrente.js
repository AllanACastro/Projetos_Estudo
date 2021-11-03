import { Conta } from "./Conta.js";


export class ContaCorrente extends Conta{
    static numeroDeContas = 0
    constructor(Cliente , agencia){
        super( 0, Cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }


    //sobrescreve comportamento de sacar
    sacar(valor){
      let taxa = 1.1
      return this._sacar(valor, taxa)
  
    }
} 
   