import { Negociacao } from "./negociacao.js";

export class Negociacoes {
     
     //private negociacoes: Negociacao[] = [];
     private negociacoes: Array<Negociacao> = [];

     public adiciona(negociacao: Negociacao){
          this.negociacoes.push(negociacao);
     }

     //lista(): readonly Negociacao[]
     public lista(): ReadonlyArray<Negociacao> {
          
          return this.negociacoes;
     }
}