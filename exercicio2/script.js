//# Exercício 2

console.log ("EXERCÍCIO02")

// Faça um programa que pergunte ao usuário dois números. 
//Em seguida, faça as operações e imprima no console as 
//seguintes mensagens seguidas pelo `true` ou `false`:
/*
```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
```*/

let  num01 = +prompt ('Digite o primeiro número: ')
let  num02 = +prompt ('Digite o segundo número: ')

console.log (typeof num01);
console.log (typeof num02);

console.log ("O priemiro número é", num01);
console.log ("O segundo número é", num02);

console.log ("O primeiro numero é maior que segundo?", num01>num02 );

console.log ("O primeiro numero é igual ao segundo?", num01===num02 );

console.log ("O primeiro numero é divisível pelo segundo?", num01%num02===0);

console.log ("O segundo numero é divisível pelo primeiro?", num02%num01===0);

