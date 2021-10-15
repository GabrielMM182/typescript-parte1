export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // private negociacoes: Array<Negociacao> = []; // mesma maneira de cima so que menos comum de utilizar
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista(): ReadonlyArray<Negociacao> { // permite apenas çeitura do array não podendo modificarlo 
    lista() {
        return this.negociacoes;
    }
}
