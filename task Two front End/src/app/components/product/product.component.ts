import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Category, keysearch, Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: []
})

export class ProductComponent implements OnInit {
  products: Product[] = [];

  mainCategory: Category[] = []
  subCategory: Category[] = []
  DataTofiltration: keysearch = {
    main: '',
    sub: ''
  }
  constructor(private _ProductService: ProductService) { }

  ngOnInit(): void {
    this._ProductService.getMainCat().subscribe({
      next: (res) => {
        this.mainCategory = res
      }
    })
  }
  GetSubCategory(event: any) {
    let categoriesID = event.value.categoriesID
    let data = {
      categoriesID: categoriesID
    }
this.products=[]
    this._ProductService.getsubCat(data).subscribe({
      next:
        (res) => {
          console.log(res)
          this.subCategory = res
        },
      error: (_err) => {


      },
      complete: () => {
      }
    })
  }
  GetProducts(event: any) {
    this.DataTofiltration.main = event.value.MaincategoriesName
    this.DataTofiltration.sub = event.value.categoriesName
    this._ProductService.getProducts(this.DataTofiltration).subscribe({
      next:
        (res) => {
          this.products = res
        },
      error: (_err) => {


      },
      complete: () => {
      }
    })
  }


}
