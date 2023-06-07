import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from './product.model';
import { Observable } from 'rxjs';
import { dbJsonApiTest } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  // Db.json, recebendo de environment.ts
  baseUrl = dbJsonApiTest.apiUrl;

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x',{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  // Função que cria um novo produto, interação com backend
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  // Função que faz a leitura dos produtos
  read(): Observable<Product[]> {
    return this.http.get<Product[]> (this.baseUrl)
  }

  // Função que lê um produto por ID
  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  // Função para atualizar o produto por ID
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  // função que deleta o produto por ID
  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }

}
