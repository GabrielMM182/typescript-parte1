import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao [] = [];
    // private negociacoes: Array<Negociacao> = []; // mesma maneira de cima so que menos comum de utilizar

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //lista(): ReadonlyArray<Negociacao> { // permite apenas çeitura do array não podendo modificarlo 
    lista(): readonly Negociacao[] { // mesma coisa do de cima so que mais utilizado
        return this.negociacoes;
    }
}
