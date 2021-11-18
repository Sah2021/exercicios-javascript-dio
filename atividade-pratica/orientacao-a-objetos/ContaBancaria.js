class ContaBancaria {

    constructor (agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;  // sempre que tiver um get e set colocar _ na frente para que a propriedade não tenha o nome saldo.
    }
/* Sacar */
    sacar(valor) {
        if (valor > this._saldo) {
            return console.log('Operação negado; saldo insuficiente!');
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }

/* Depositar */
    depositar (valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

/* Saldo */

    set saldo (valor) {
        this._saldo = valor;
    }
    get saldo () {
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito) {
        super (agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    set cartaoCredito (valor) {
        this._cartaoCredito = valor;
    }

    get cartaoCredito () {
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero) {
        super (agencia, numero)
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero) {
        super (agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada.';
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

/* const minhaConta = new ContaCorrente (1, 211, true);
const contaUni = new ContaUniversitaria (2, 333); */