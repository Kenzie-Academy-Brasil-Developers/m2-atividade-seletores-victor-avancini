/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/
const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList)

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/
const titulo = document.querySelector("h1");
console.log(titulo)

/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/
const receita = document.querySelector(".recipe");
console.log(receita)

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/
const titulo2 = document.querySelectorAll("h2");
for(let i = 0; i < titulo2.length; i++){
  titulo2[i].style.color = "blue";
}

/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/
const borda = document.querySelectorAll("input");
for(let i = 0; i < borda.length; i++){
  borda[i].style.border = "red 3px solid"
}
