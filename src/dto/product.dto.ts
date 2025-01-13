export class ProductDto{
    productId: string;
    name: string;
    price: number;
    category: string;
}

export class ProductLogDto{
    productId: string;
    eventName: string;
    createAt: Date;
}