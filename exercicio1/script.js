/*# Exercício 1

Construa um programa que:

a) Peça ao usuário que insira um número **par**

b) Imprima no console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número */

console.log("EXERCÍCIO 01")

const numpar = Number (prompt ("Insira um número par"));

resp = numpar%2

console.log ("O resto da divisão é", resp)

