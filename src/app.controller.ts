import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { ProductDto } from './dto/product.dto';

@Controller('api/product')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/save')
  saveProduct(@Body() product: ProductDto): Observable<ProductDto>{
    console.log(`Save product ${product.name}`)
    return this.appService.saveProduct(product);
  }

  @Put('/update/:productId')
  updateProduct(@Param('productId') id: string, @Body() product: ProductDto): Observable<ProductDto>{
    console.log(`Update product ${product.name}`)
    return this.appService.updateProduct(id, product);
  }

  @Get('/:productId')
  getProduct(@Param('productId') id: string): Observable<ProductDto>{
    console.log(`Find product with id ${id}`)
    return this.appService.getProduct(id);
  }

  @Get('/all')
  getAllProducts(): Observable<ProductDto>{
    console.log('Find products')
    return this.appService.getAllProducts();
  }

}
