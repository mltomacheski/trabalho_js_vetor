// let numeros = [];

// numeros[0] = prompt();
// numeros[1] = prompt();
// numeros[2] = prompt();
// numeros[3] = prompt(); // O usuário digita o valor numérico 
// numeros[4] = 90; // somente o progamador saberá o valor numérico 

// //lendo o vetor 
// for (let x = 0; x < numeros.length; x++ ){
//     console.log (numeros [x]);// imprimir a posição do vetor 
// }

// console.log(numeros.length);

// let capitais = [
//     "Palmas",
//     "São Paulo"
// ];

//Adicionar um  valor no final do array (vetor)
//capitais.push("Manaus");

// adicionar valor no inicio do vetor e retorna o novo tamanho do vetor 
//console.log(capitais.unshift("Curitiba")); 

//Remove o elemento do inicio do vetor. Retorna o elemento removido 
// capitais.shift();

// //Remove o ultimo elemento do vetor 
// capitais.pop();

// //Alterar o conteúdo do vetor escolhido,remover o elemento(s), posição inicial 
// //Elemento a ser inserido 
// //O 0 é o indice, o 1 é a qtd de elementos e o novo elemento "toquio"
// capitais.splice(0, 1, "Tokyo");


// for (let x = 0; x < capitais.length; x++ ){
//     console.log (capitais [x]);// imprimir a posição do vetor 
// }

// console.log("======================================================")


// //Retornar um intervalo do vetor
// //Posição inicial e Posição final
// //obs: não altera o vetor original
// console.log(capitais.slice(0, 2));

// let estados = [
//     "Roraima",
//     "Acre",
//     "Tocantins",
//     "Bahia"
// ];

// //Ordenar o vetor em ordem alfabética
// estados.sort();
// console.log(estados);

// let numeros= [
//     "80",
//     "2",
//     "10",
//     "1"
// ];

// //Ordenar o vetor em ordem crescente
// numeros.sort( (a, b) => a- b );
// console.log(numeros);

// let sistemas= [
//     "Android",
//     "iOs",
//     "macOS",
//     "Linux",
//     "Windows"
// ];

// //inverte os elementos de um array (vetor)
// //sistemas.reverse();

// //retorna o primeiro indice em que o elemento é encontrado no vetor (array)
// // sistemas.indexOf( "macOS");
// console.log(sistemas);

// //aqui imprime só a  posição 
// console.log(sistemas.indexOf( "macOS"));


//                         //aqui retorna o numero do iindice
// console.log( sistemas[sistemas.indexOf( "macOS")]);
//                     //dentro do colchete localiza o indice exemplos 2
//             // o vetor sistemas acha o elemento da posição 2
// //console.log(); imprime o resultado "macOS"

// let produtos = [
//     "Abacaxi",
//     "Tomate",
//     "Cebola",
//     "Salsicha de soja"
// ];

//For interar (varrer, percorrer ) as posições do vetor (array)
//Produtos ==> é o vetor 
//Item ==> variável temporaria que recebe o valor da posição 


// for(item of produtos){
//     console.log(item);
// };

// console.log(produtos.length);

// for(let i = 0; i = produtos.length; i++){
//     console.log( produtos[i]);
// };

//Criar funções para todos os exemplos.
//esqueleto da fuunção 
// 1- colocar um nome sugestivo 
// 2- colocar dentro da funcao
// 3- laço para percorrer o vetor 
// 4- transformar a função em dinamica passando o vetor  ( qualquer vetor)

function imprimeVetor (vetor){
    for(item of vetor){
    console.log(item);
    }
};


let produtos = [
    "Tomate",
    "Abacaxi",
    "Cebola",
    "Salsicha de Soja",
    "mosca"
];

let cores = [
    "verde",
    "amarelo",
    "azul",
    "branco"
];

let sistemas = [
    "Android",
    "iOS",
    "macOS",
    "Linux",
    "Windows"
];

function adicionarNoFinal(vetor, elementos){
    vetor.push( elementos);
    imprimeVetor(vetor);
}

adicionarNoFinal(cores, "vermelho");


console.log("========================================");

function adicionarNoFinal(vetor, elementos){
    vetor.unshift( elementos);
    imprimeVetor(vetor);
}

adicionarNoFinal(sistemas, "teste");

console.log("========================================");

function adicionarNoFinal(vetor, elementos){
    vetor.shift( elementos);
    imprimeVetor(vetor);
}

adicionarNoFinal(produtos, "Abacaxi");

console.log("========================================");

function adicionarNoFinal(vetor, elementos){
    vetor.pop( elementos);
    imprimeVetor(vetor);
}

adicionarNoFinal(cores, "Abacaxi");
