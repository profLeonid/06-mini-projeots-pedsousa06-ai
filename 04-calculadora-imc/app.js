'use strict'

function calcularMedia() {

    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    const nome = document.getElementById('nome')

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, preencha todas os espaços.")
        return
    }

    const imc = altura * altura / peso

    const resultado = document.getElementById("resultado")

    resultado.classList.remove("resultado-verde", "resultado-marrom", "resultado-vermelho")

    if (mediaFinal >= 7) {
        resultado.classList.add("resultado-verde")
        resultado.textContent = `Média: ${mediaFinal.toFixed(1)} — Aprovado`
    } else if (mediaFinal >= 5) {
        resultado.classList.add("resultado-marrom")
        resultado.textContent = `Média: ${mediaFinal.toFixed(1)} — Recuperação`
    } else {
        resultado.classList.add("resultado-vermelho")
        resultado.textContent = `Média: ${mediaFinal.toFixed(1)} — Reprovado`
    }
    
}