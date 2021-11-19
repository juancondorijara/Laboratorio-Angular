import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación de Calculadora Básica';
  operandoA:number;
  operandoB:number;
  resultado:number;

  sumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
  restar():void{
    this.resultado = this.operandoA - this.operandoB;
  }
  multiplicar():void{
    this.resultado = this.operandoA * this.operandoB;
  }
  dividir():void{
    this.resultado = this.operandoA / this.operandoB;
  }
}
