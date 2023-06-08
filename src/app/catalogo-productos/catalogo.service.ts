import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private url = 'assets/catalogo-productos.json';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<any[]>(this.url);
  }
}
