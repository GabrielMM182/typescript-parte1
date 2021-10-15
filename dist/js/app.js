import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // previnir o refresh da pagina para funcionar o formulario
    controller.adiciona();
});
