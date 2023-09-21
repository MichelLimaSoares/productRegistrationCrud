import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product/product.service';
import { Product } from 'src/app/components/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  // Atributo do componente
  products!: Product[];
  displayedColumns = ['id', 'name', 'price', 'description']

  constructor ( private productService: ProductService ) { 

   }

  // Metodo chamado quando o componente é inicializado
  ngOnInit(): void {
    this.productService.read().subscribe((products: Product[]) => {
      this.products = products
    })
  }

}
