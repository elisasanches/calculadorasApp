import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public calculo = ''; // vazia
  public resultado: string;

  constructor() {}

public adicionarNumero(valor) {
  this.calculo = this.calculo + valor;
}

public adicionarPonto() {
  this.calculo += ".";
}

public adicionarOperacao(operador: string) {
   this.calculo += operador;
}

public apagarTudo() {
   this.calculo = '';
   this.resultado = null;
}

}
