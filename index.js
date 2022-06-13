function selecionado1(elemento, tipo) {
    const selecao = document.querySelector("." + tipo + ".prato");
    if (selecao !== null) {
        selecao.classList.remove("prato");
        selecao.lastElementChild.classList.add("esconder");
    }

    elemento.classList.add("prato");
    elemento.lastElementChild.classList.remove("esconder");
    fecharPedido();
}

function selecionado2(elemento, tipo) {
    const selecao = document.querySelector("." + tipo + ".bebida");
    if (selecao != null) {
        selecao.classList.remove("bebida");
        selecao.lastElementChild.classList.add("esconder");
    }

    elemento.classList.add("bebida");
    elemento.lastElementChild.classList.remove("esconder");
    fecharPedido();
}

function selecionado3(elemento, tipo) {
    const selecao = document.querySelector("." + tipo + ".sobremesa");
    if (selecao != null) {
        selecao.classList.remove("sobremesa");
        selecao.lastElementChild.classList.add("esconder");
    }

    elemento.classList.add("sobremesa");
    elemento.lastElementChild.classList.remove("esconder");
    fecharPedido();
}

function fecharPedido() {
    const pratoSelec = document.querySelector(".card.prato");
    const bebidaSelec = document.querySelector(".card.bebida");
    const sobremesaSelec = document.querySelector(".card.sobremesa");

    if ((pratoSelec != null) && (bebidaSelec != null) && (sobremesaSelec != null)) {
        const sumir = document.querySelector(".desabilitado");
        sumir.classList.add("escondido");

        const aparecer = document.querySelector(".habilitado");
        aparecer.classList.remove("escondido");
    }
}

function pegarValor(valor) {
    return valor.innerHTML.replace(",", "").trim() / 100
}

function pedidoFechado() {
    const prato = document.querySelector(".card.prato");
    const valorPrato = pegarValor(prato.querySelector(".valor"));

    const bebida = document.querySelector(".card.bebida");
    const valorBebida = pegarValor(bebida.querySelector(".valor"));

    const sobremesa = document.querySelector(".card.sobremesa");
    const valorSobremesa = pegarValor(sobremesa.querySelector(".valor"));

    const total = valorPrato + valorBebida + valorSobremesa;
    console.log(total.toFixed(2));

    const zapZap = `Olá, gostaria de fazer o pedido: \n
    - Prato: ${prato.querySelector("h4").textContent} \n
    - Bebida: ${bebida.querySelector("h4").textContent} \n
    - Sobremesa: ${sobremesa.querySelector("h4").textContent} \n
    Total: R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/5531985333881?text=${encodeURIComponent(zapZap)}`)
}