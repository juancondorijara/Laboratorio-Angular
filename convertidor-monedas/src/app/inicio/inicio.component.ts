import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cantidad = 1;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: any[] = [
    { name: 'USD', desc: 'US Dolar' },
    { name: 'EUR', desc: 'Euro' },
    { name: 'LIBRA', desc: 'Libra' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.convertir();
  }


  convertir(): void {

    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad * 0.85;
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.77;
        }
        break;
      case 'EUR':
        if (this.quiero === 'USD'){
          this.total = this.cantidad * 1.18;
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.91;
        }
        break;
      case 'LIBRA':
        if (this.quiero === 'USD'){
          this.total = this.cantidad * 1.30;
        }
        if (this.quiero === 'EUR'){
          this.total = this.cantidad * 1.10;
        }
        if (this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
        break;

    }
  }

}
