import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public calculo = ''; // vazia
  public resultado: string; // null

  private ponto = false;
  private operacoes = ['+', '-', '*', '/'];

  constructor() {}

public adicionarNumero(valor: string) {
  this.calculo = this.calculo + valor;
}

public adicionarPonto() {
  if (this.ponto) {
    return; 
  } 
  this.calculo += ".";
  this.ponto = true;
}

public adicionarOperacao(operador: string) {
const ultimo = this.calculo.slice(-1);

if (this.operacoes.indexOf(ultimo) > -1) {
  return;
}

   this.calculo += operador;
   this.ponto = false;
}

public apagarTudo() {
   this.calculo = '';
   this.resultado = null;
   this.ponto = false;
}

public apagarUltimo() {
  const ultimo = this.calculo.slice(-1);
  if (ultimo == '.') {
    this.ponto = false;
  }
  this.calculo = this.calculo.slice(0, -1);
}

}
