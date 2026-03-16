'use strict'

function calcularIMC() {

    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    const nome = document.getElementById('nome').value.trim()

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, preencha todos os espaços.")
        return
    }

    const imc = peso / (altura * altura)

    const resultado = document.getElementById("resultado")

    resultado.classList.remove(
        "resultado-abaixo-peso",
        "resultado-normal",
        "resultado-sobrepeso",
        "resultado-obesidade-1",
        "resultado-obesidade-2",
        "resultado-obesidade-3"
    )

    const saudacao = nome ? `${nome}, seu IMC é ${imc.toFixed(1)}` : `Seu IMC é ${imc.toFixed(1)}`

    if (imc < 18.5) {
        resultado.classList.add("resultado-abaixo-peso")
        resultado.textContent = `${saudacao} — Abaixo do peso`
    } else if (imc <= 24.9) {
        resultado.classList.add("resultado-normal")
        resultado.textContent = `${saudacao} — Peso normal`
    } else if (imc <= 29.9) {
        resultado.classList.add("resultado-sobrepeso")
        resultado.textContent = `${saudacao} — Sobrepeso`
    } else if (imc <= 34.9) {
        resultado.classList.add("resultado-obesidade-1")
        resultado.textContent = `${saudacao} — Obesidade grau I`
    } else if (imc <= 39.9) {
        resultado.classList.add("resultado-obesidade-2")
        resultado.textContent = `${saudacao} — Obesidade grau II`
    } else {
        resultado.classList.add("resultado-obesidade-3")
        resultado.textContent = `${saudacao} — Obesidade grau III`
    }

    resultado.classList.add("visivel")
}