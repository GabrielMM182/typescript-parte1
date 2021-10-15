import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement; //htmlinput pois não sabemos o seu tipo
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes(); // negociacoes vai  receber Negociacoes

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  adiciona() :void { // sempre colocar oq vai retornar no final podendo ser VOID ou oq for em seu retorn 
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista());
    this.limparFormulario();
  }

   criaNegociacao(): Negociacao {

    const exp = /-/g; // pega o date que tem hifen em sua separação - 
    const date = new Date(this.inputData.value.replace(exp, ",")); // e vai substituir por virgula
    const quantidade = parseInt(this.inputQuantidade.value); // vai receber como inteiro
    const valor = parseFloat(this.inputValor.value); // vai receber como real 
    return new Negociacao(date, quantidade, valor);

  }

  limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();  
  }
}
