

export class Product {
    constructor(
        private id : string,
        private name: string,
        private tags: string[]
    ){}
}

export interface ProductDTO {
    name: string,
    tags: string[]
}