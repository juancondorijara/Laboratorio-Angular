import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) {
    this.listarCliente();
    this.listarUbigeo();
  }

  cliente: any[] = [];
  ubigeo: any[] = [];

  private listarCliente() {
    this.http.get('http://localhost:2100/cliente')
    .subscribe( (resp: any) => {
    this.cliente = resp;
    console.log(this.cliente);
    });
  }

  private listarUbigeo() {
    this.http.get('http://localhost:2100/ubigeo')
    .subscribe( (resp: any) => {
    this.ubigeo = resp;
    console.log(this.ubigeo);
    });
  }
}
