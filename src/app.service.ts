import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { catchError, map, Observable } from 'rxjs';
import { ProductDto } from './dto/product.dto';
import { API_PRODUCT } from './app.settings';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService){}

  saveProduct(product: ProductDto): Observable<ProductDto>{    
    const productSave = this.httpService.post(API_PRODUCT + 'product/save', product).pipe(
      map((response: AxiosResponse) => response.data),
      catchError(error => {
        throw new Error(`Error saving product: ${error.message}`)
      })
    );
    return productSave;
  }

  updateProduct(productId: string, product: ProductDto): Observable<ProductDto>{    
    const productSave = this.httpService.put(`${API_PRODUCT}product/update/${productId}`, product).pipe(
      map((response: AxiosResponse) => response.data),
      catchError(error => {
        throw new Error(`Error updating product: ${error.message}`)
      })
    );
    return productSave;
  }

  getProduct(productId: string): Observable<ProductDto>{
    const product = this.httpService.get(`${API_PRODUCT}product/${productId}`).pipe(
      map(response => response.data),
      catchError(error => {
        throw new Error(`Error fetching product: ${error.message}`)
      })
    );
    return product;
  }

  getAllProducts(): Observable<ProductDto>{
    const products = this.httpService.get(API_PRODUCT + 'product/all').pipe(
      map(response => response.data),
      catchError(error => {
        throw new Error(`Error fetching products: ${error.message}`)
      })
    );
    return products;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
