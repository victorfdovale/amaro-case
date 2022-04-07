import { ProductDataBase } from "../data/ProductDataBase";
import { Product, ProductDTO } from "../entities/Product";


export class ProductBusiness {
    constructor(
        private productDataBase: ProductDataBase
    ){}

    register = async(input: ProductDTO) => {
        const {name, tags} = input

        if(!name || !tags){
            throw new Error ("Um ou mais campos estão em branco")            
        }

        const id = Date.now().toString()
        const product = new Product(id, name, tags)

        await this.productDataBase.insert(product)
    }

    getAllProducts = async () =>{
        try {
            const result = await this.productDataBase.getAllProducts()
            return result 
        } catch (error) {
            throw new Error ("Não foi possível retornar Produtos")
        }
    }

    getProductByName  = async (name: string) => {
        if(!name){
            throw new Error ('Digite o nome do produto')
        }
        const product = await this.productDataBase.getProductByName(name)
        return product
    } 
}