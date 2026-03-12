'use strict'

function calcularMedia() {

    const nota1 = parseFloat(document.getElementById("nota1").value)
    const nota2 = parseFloat(document.getElementById("nota2").value)
    const nota3 = parseFloat(document.getElementById('nota3').value)

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, preencha todas as notas.")
        return
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        alert("As notas devem ser entre 0 e 10.")
        return
    }

    const mediaFinal = (nota1 + nota2 + nota3) / 3

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