import { Product, Category, keysearch, CategoryDto, categoriesID, ProductDto } from './../models/products.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getMainCat() {
    return this.http.get<CategoryDto>('http://localhost:3000/categories/main').pipe(
      switchMap((res) => {
        return of(res.data)
      })
    )

  }
  getsubCat(categoriesID:categoriesID) {
    return this.http.post<CategoryDto>('http://localhost:3000/categories/specificSub', categoriesID).pipe(
      switchMap((res) => {
        return of(res.data);
      })
    )
  }

  getProducts(body: keysearch) {
    return this.http.post<ProductDto>('http://localhost:3000/products', body).pipe(
      switchMap((res) => {
        return of(res.products);
      })
    )
  }

}
