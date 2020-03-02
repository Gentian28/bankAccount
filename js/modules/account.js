import formatDate from './formatDate.js';

class Account {
    _name;
    _balance = 0;
    _transactions = [];

    constructor(name) {
        this._name = name;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            throw { message: 'Ju nuk keni kredit te mjaftueshem' }
        }
        if (amount <= 0) {
            throw { message: 'Vlera duhet te jete me e madhe 0' }
        }
        if (!Number.isInteger(Number(amount))) {
            throw { message: 'Vlera duhet te jete nje numer' }
        }
        this._transactions.push({ action: 'withdraw', amount: amount, dateTime: formatDate() });
        this._balance = this._balance - amount;
    }

    deposit(transactionName, amount) {
        if (!transactionName) {
            throw { message: 'Emri i transaksionit nuk mund te jete bosh' }
        }
        if (amount <= 0) {
            throw { message: 'Vlera duhet te jete me e madhe 0' }
        }
        if (!Number.isInteger(Number(amount))) {
            throw { message: 'Vlera duhet te jete nje numer' }
        }
        this._transactions.push({ action: 'deposit', amount: amount, transactionName: transactionName, dateTime: formatDate() });
        this._balance = Number(this._balance) + Number(amount);
    }

    get name() {
        return this._name;
    }

    get balance() {
        return this._balance;
    }

    get withdraws() {
        return this._transactions.filter(transaction => transaction.action === 'withdraw');
    }

    get deposits() {
        return this._transactions.filter(transaction => transaction.action === 'deposit');
    }
}

export default Account;