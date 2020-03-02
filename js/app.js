import Account from './modules/account.js';
import templates from './modules/templates.js';

const account = new Account('Gentian Shkembi');

const actionBtns = document.getElementsByClassName('action');

for (let i = 0; i < actionBtns.length; i++) {
    actionBtns[i].onclick = function () {
        actions.style.display = 'none';
        actionTemplate.style.display = 'block';
        const actionType = this.dataset.actionType;
        getTemplate(actionType);
    }
}

function displayErrorMessage(message) {
    errorMessage.style.top = '15px';
    errorMessage.innerHTML = message;
    setTimeout(() => {
        errorMessage.style.top = '-200px';
    }, 2500);
}

function goBack() {
    actions.style.display = 'flex';
    actionTemplate.innerHTML = '';
    actionTemplate.style.display = 'none';
}

function submitWithdraw() {
    const amount = withdrawAmount.value;
    try {
        account.withdraw(amount);
        goBack();
    }
    catch (error) {
        displayErrorMessage(error.message);
        console.log(error);
    }
    console.log(account);
    console.log(account.withdraws);
}

function submitDeposit() {
    const tName = transactionName.value;
    const amount = depositAmount.value;
    try {
        account.deposit(tName, amount);
        goBack();
    }
    catch (error) {
        displayErrorMessage(error.message);
        console.log(error);
    }

    console.log(account);
    console.log(account.deposits);
}

function getBalance() {
    return account.balance;
}

function getWithdraws() {
    return account.withdraws;
}

function getDeposits() {
    return account.deposits;
}

function getTemplate(action) {
    switch (action) {
        case 'withdraw':
            actionTemplate.innerHTML = templates.withdrawTemplate;
            submitWithdrawBtn.onclick = submitWithdraw;
            goBackBtn.onclick = goBack;
            break;
        case 'deposit':
            actionTemplate.innerHTML = templates.depositTemplate;
            submitDepositBtn.onclick = submitDeposit;
            goBackBtn.onclick = goBack;
            break;
        case 'balance':
            actionTemplate.innerHTML = templates.balanceTemplate;
            accountHolder.innerHTML = account.name;
            balanceAmount.innerHTML = getBalance();
            goBackBtn.onclick = goBack;
            break;
        case 'getWithdraws':
            actionTemplate.innerHTML = templates.withdrawsTemplate;
            let withdrawItem = '';
            if (getWithdraws().length) {
                getWithdraws().forEach(withdraw => {
                    withdrawItem += `
                    <li>
                        <div>Vlera: ${withdraw.amount}</div>
                        <div>Data: ${withdraw.dateTime}</div>
                    </li>
                `;
                });
                withdrownAmounts.innerHTML = withdrawItem;
            } else {
                withdrownAmounts.innerHTML = 'Nuk eshte kryer asnje terheqje.';
            }
            goBackBtn.onclick = goBack;
            break;
        case 'getDeposits':
            actionTemplate.innerHTML = templates.depositsTemplate;
            let depsoitItem = '';
            if (getDeposits().length) {
                getDeposits().forEach(deposit => {
                    depsoitItem += `
                    <li>
                    <div>Emri i transaksionit: ${deposit.transactionName}</div>
                    <div>Vlera: ${deposit.amount}</div>
                        <div>Data: ${deposit.dateTime}</div>
                    </li>
                `;
                });
                depositedAmounts.innerHTML = depsoitItem;
            } else {
                depositedAmounts.innerHTML = 'Nuk eshte kryer asnje depozitim.';
            }
            goBackBtn.onclick = goBack;
            break;
        default:
            alert('Veprim i gabuar!!!')
    }
}

