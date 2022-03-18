

export interface Product {
  ProductTableID: number;
  ProductName: string;
  Productimage: string;
  SubCategory: number;
  MainCategory: number;
  categoriesID: number;
  categoriesName: string;
  isParent: number;
  ParentID: number;
  MaincategoriesName: string;
}

export interface Category {
  categoriesID: number;
  categoriesName: string;
  isParent: number;
  ParentID: number;
  MaincategoriesName: null;
}
export interface keysearch {

  main: string,
  sub: string
}
export interface CategoryDto {
 
  message: string,
  data: Category[]

  
}
export interface categoriesID {
  categoriesID: string;
}
export interface ProductDto {
 
  message: string,
  products: Product[]

  
}