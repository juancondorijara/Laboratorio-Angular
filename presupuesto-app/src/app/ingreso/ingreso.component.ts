import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];

  constructor(private ingresoServicio:IngresoServicio) { }

  ngOnInit() {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarIngreso(ingreso){
    this.ingresoServicio.eliminar(ingreso); 
  }

}
