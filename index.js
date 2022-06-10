function selecionado1(elemento, tipo) {
    const selecao = document.querySelector("." + tipo + ".prato");
    if (selecao != null) {
        selecao.classList.remove("prato");
    }

    elemento.classList.add("prato");
    fecharPedido();
}

function selecionado2(elemento, tipo) {
    const selecao = document.querySelector("." + tipo + ".bebida");
    if (selecao != null) {
        selecao.classList.remove("bebida");
    }

    elemento.classList.add("bebida");
    fecharPedido();
}

function selecionado3(elemento, tipo) {
    const selecao = document.querySelector("." + tipo + ".sobremesa");
    if (selecao != null) {
        selecao.classList.remove("sobremesa");
    }

    elemento.classList.add("sobremesa");
    fecharPedido();
}

function fecharPedido() {
    const pratoSelec = document.querySelector(".card.prato");
    const bebidaSelec = document.querySelector(".card.bebida");
    const sobremesaSelec = document.querySelector(".card.sobremesa");

    if ((pratoSelec != null) && (bebidaSelec != null) && (sobremesaSelec != null)) {
        const sumir = document.querySelector(".desabilitado");
        sumir.classList.toggle("escondido");

        const aparecer = document.querySelector(".habilitado");
        aparecer.classList.toggle("escondido");
    }
}