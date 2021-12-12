import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public servicio: ServicioService) { }

  ngOnInit(): void {
  }

}
