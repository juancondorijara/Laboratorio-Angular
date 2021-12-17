import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirectCliente() {
    this.router.navigate(['cliente']);
  }

  redirectAbarrotes() {
    this.router.navigate(['abarrotes']);
  }

  redirectDesayuno() {
    this.router.navigate(['desayuno']);
  }

  redirectLacteosYHuevos() {
    this.router.navigate(['lacteosyhuevos']);
  }

  redirectQuesosYFiambres() {
    this.router.navigate(['quesosyfiambres']);
  }

  redirectHeladosYCongelados() {
    this.router.navigate(['heladosycongelados']);
  }

  redirectPizzasYPreparados() {
    this.router.navigate(['pizzasypreparados']);
  }

  redirectDulcesYSnacks() {
    this.router.navigate(['dulcesysnacks']);
  }

  redirectBebidas() {
    this.router.navigate(['bebidas']);
  }

  redirectCervezaLicoresVinos() {
    this.router.navigate(['cervezalicoresvinos']);
  }
  
}
