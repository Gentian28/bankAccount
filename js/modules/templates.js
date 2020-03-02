const templates = {
    withdrawTemplate: `<article id="withdrawRoute" class="withdraOrDeposit">
        <div id="goBackBtn"><p class="back-symbol">&#8249;</p><p>Kthehu mbrapa</p></div>
        <input type="text" id="withdrawAmount" placeholder="Vlera">
        <button type="button" id="submitWithdrawBtn">Terhiq</button>
    </article>`,

    depositTemplate: `<article id="depositRoute" class="withdraOrDeposit">
        <div id="goBackBtn"><p class="back-symbol">&#8249;</p><p>Kthehu mbrapa</p></div>
        <input type="text" id="transactionName" placeholder="Emri i transaksionit">
        <input type="text" id="depositAmount" placeholder="Vlera">
        <button type="button" id="submitDepositBtn" onclick="">Depozito</button>
    </article>`,

    balanceTemplate: `<article id="balanceRoute">
        <div id="goBackBtn"><p class="back-symbol">&#8249;</p><p>Kthehu mbrapa</p></div>
        <section>
            <div>Emri i llogarise: <span id="accountHolder"></span></div>
            <div>Balanca aktuale: <span id="balanceAmount"></span></div>
        </section>
    </article>`,

    withdrawsTemplate: `<article id="withdrawsRoute">
        <div id="goBackBtn"><p class="back-symbol">&#8249;</p><p>Kthehu mbrapa</p></div>
        <ul id="withdrownAmounts"></ul>
    </article>`,

    depositsTemplate: `<article id="depositsRoute">
        <div id="goBackBtn"><p class="back-symbol">&#8249;</p><p>Kthehu mbrapa</p></div>
        <ul id="depositedAmounts"></ul>
    </article>`
}

export default templates;