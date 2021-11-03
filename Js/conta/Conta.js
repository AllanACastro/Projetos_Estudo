//classe abstrata
export class Conta{

    constructor(saldoInicial, cliente, agencia){

        if (this.constructor == Conta){
            throw new Error("acesso negado para instanciar objeto tipo conta. Classe Abstrata. ")
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;


    }
    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get saldo (){
        return this._saldo
    }

    //metodo abstrato
    sacar(valor){
        throw new Error('por favor acione o metodo sacar, metodo abstrato');        
    }

    _sacar(){
        const valorSacado =taxa *valor;
        if (this._saldo >= valor){
            this._saldo-= valor;
            return valor;
        }

        return 0;
    }

    depositar (valor){
        if(valor <= 0) return;
        this._saldo += valor
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}