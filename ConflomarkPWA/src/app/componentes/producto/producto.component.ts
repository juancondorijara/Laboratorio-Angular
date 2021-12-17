import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
  }

}
