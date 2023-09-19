import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: null,
    description: "",
    quantity_in_stock: 0
  }

  // atributoLegal = "qualquer"
  constructor(private productService: ProductService,
    private router: Router ) {

  }

  ngOnInit(): void{
    // this.productService.showMessage("Sucesso...")
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado com Sucesso...")
      this.router.navigate(["/products"])      
    })    
  }

  cancel(): void{
    this.router.navigate(["/products"])
  }

}
