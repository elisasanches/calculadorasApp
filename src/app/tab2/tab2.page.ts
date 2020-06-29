import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public calculo = ''; // vazia
  public resultado: string; // null

  private ponto = false; //falso
  private operacoes = ['+', '-', '*', '/']; //operacoes

  constructor(public alertController: AlertController) {}

public adicionarNumero(valor: string) {
   if (this.resultado) {
      this.apagarTudo();
   }

  this.calculo = this.calculo + valor;
} //adiciona um numero que esta declarado no botao onde se encontra a funcao

public adicionarPonto() {
  if (this.ponto) {
    return; 
  } 
  this.calculo += ".";
  this.ponto = true; //verdadeiro
}

public adicionarOperacao(operador: string) {

if (this.resultado) {
  this.calculo = this.resultado.toString();
  this.resultado = null; //nulo
}

const ultimo = this.calculo.slice(-1); //cria uma constante para o ultimo caracter
if (this.operacoes.indexOf(ultimo) > -1) {
  return;
}  //verifica o ultimo caracter para nao repetir operacao

   this.calculo += operador;
   this.ponto = false; //falso
}

public apagarTudo() {
   this.calculo = ''; //variavel como "vazio"
   this.resultado = null; //variavel nulla
   this.ponto = false;  //variavel falsa
}

public apagarUltimo() {
  const ultimo = this.calculo.slice(-1); //cria uma constante para o ultimo caracter
  if (ultimo == '.') {
    this.ponto = false; //falso
  } //verifica se o ultimo caracter é um "." se for, atribui "false" a variavel
  this.calculo = this.calculo.slice(0, -1); //apaga o ultimo caracter
}

public calcularResultado() {
  try {
      this.resultado = evaluate(this.calculo);
  }catch(e) {
    this.resultado = ''; //vazia
    this.presentAlert('ERRO!!!', 'Cálculo invalido, verifique!'); //valor as variaveis de aviso
    }
  } //efetua se todas as operacoes que estiverem na tela, atraves da biblioteca("mathjs")

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo, //apelido
      message: mensagem, //apelido
      buttons: ['OK']
    });

    await alert.present();
  } //caso tenha um erro nas operacoes em tela, ele avise o usuario do erro

}
