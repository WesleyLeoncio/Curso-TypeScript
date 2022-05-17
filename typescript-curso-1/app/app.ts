import { NegociacaoController } from "./controllers/negociacao-controller.js"; // lembrar de colocar .js

const controller = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.adicionar();
})