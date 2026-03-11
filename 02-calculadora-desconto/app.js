'use strict'

function calcularDesconto() {

    const preco = parseFloat(document.getElementById("preco").value)
    const desconto = parseFloat(document.getElementById("desconto").value)

    const economizado = preco * (desconto / 100)
    const precoFinal = preco - economizado

    const resultado = document.getElementById("resultado")

    resultado.classList.remove("resultado-verde", "resultado-marrom", "resultado-vermelho")

    if (desconto <= 5) {
        resultado.classList.add("resultado-verde")
    } 
    else if (desconto <= 10) {
        resultado.classList.add("resultado-marrom")
    } 
    else {
        resultado.classList.add("resultado-vermelho")
    }

    document.getElementById("precoFinal").textContent = precoFinal.toFixed(2)
    document.getElementById("valorEconomizado").textContent = economizado.toFixed(2)
}