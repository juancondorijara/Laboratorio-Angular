import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
  private API_SERVER = "http://localhost:2100/ubigeo";

  constructor (
    private httpClient: HttpClient
  ) {}

  public getAllUbigeo(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
