import Account from './modules/account.js'

const account = new Account('Gentian');
account.deposit('Payroll', 30000);

const actionBtns = document.getElementsByClassName('action');

const withdrawTemplate = `<div id="withdrawRoute">
    <input type="text" id="withdrawAmount" placeholder="value">
    <button type="button" id="submitWithdrawBtn">Terhiq</button>
    <button id="goBackBtn">Kthehu mbrapa</button>
</div>`;

const depositTemplate = `<div id="depositRoute">
    <input type="text" id="transactionName" placeholder="Emri i transaksionit">
    <input type="text" id="depositAmount" placeholder="vlera">
    <button type="button" id="submitDepositBtn" onclick="">Depozito</button>
    <button id="goBackBtn">Kthehu mbrapa</button>
</div>`;

const balanceTemplate = `<div id="balanceRoute">
    <div>Balanca aktuale: <span id="balanceAmount"></span></div>
    <button id="goBackBtn">Kthehu mbrapa</button>
</div>`;

const withdrawsTemplate = `<div id="withdrawsRoute">
    <ul id="withdrownAmounts"></ul>
    <button id="goBackBtn">Kthehu mbrapa</button>
</div>`;

const depositsTemplate = `<div id="depositsRoute">
    <ul id="depositedAmounts"></ul>
    <button id="goBackBtn">Kthehu mbrapa</button>
</div>`;

for (let i = 0; i < actionBtns.length; i++) {
    actionBtns[i].onclick = function () {
        actions.style.display = 'none';
        actionTemplate.style.display = 'block';
        const actionType = this.dataset.actionType;
        getTemplate(actionType);
    }
}

function goBack() {
    actions.style.display = 'block';
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
            actionTemplate.innerHTML = withdrawTemplate;
            submitWithdrawBtn.onclick = submitWithdraw;
            goBackBtn.onclick = goBack;
            break;
        case 'deposit':
            actionTemplate.innerHTML = depositTemplate;
            submitDepositBtn.onclick = submitDeposit;
            goBackBtn.onclick = goBack;
            break;
        case 'balance':
            actionTemplate.innerHTML = balanceTemplate;
            balanceAmount.innerHTML = getBalance();
            goBackBtn.onclick = goBack;
            break;
        case 'getWithdraws':
            actionTemplate.innerHTML = withdrawsTemplate;
            let withdrawItem = '';
            getWithdraws().forEach(withdraw => {
                withdrawItem += `
                    <li>
                        Amount: ${withdraw.amount}
                        Action: ${withdraw.action}
                    </li>
                `;
            });
            withdrownAmounts.innerHTML = withdrawItem;
            goBackBtn.onclick = goBack;
            break;
        case 'getDeposits':
            actionTemplate.innerHTML = depositsTemplate;
            getDeposits().forEach(deposit => {
                const node = document.createElement("LI");
                const textnode = document.createTextNode(deposit.amount);
                node.appendChild(textnode);
                depositedAmounts.appendChild(node);
            });
            goBackBtn.onclick = goBack;
            break;
        default:
            console.log('nth')
    }
}

