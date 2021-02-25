console.log("conversão De Tipos");

console.log("ano"+20); //vai concatenar;
console.log("2"+"2"); //vai concatenar;
console.log(parseInt("2") + parseInt("2")); // vai ler um texto e transformar em número;
console.log("7"/"2"); // Vai fazer a divisão corretamente porque para o node interpredador do js divisão só faz sentido com números por isso ele faz a divisão implicitamente e correntamente mesmo os valores sendo em texto , por estarem entre aspas.
 console.log("Ricardo" / "2"); // erro:Not a Number= iso não é número,isto da erro por que a divisão presupôe número e não letra.

 console.log(6.5);
 console.log(6,5);
 //para números flutuantes, isto é, numeros com casas decimais, se uma ponto para separa e não vírgula, se colocar virgula o interpretador entende como espaço;