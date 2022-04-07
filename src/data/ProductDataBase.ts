import { Product } from "../entities/Product"
import BaseDatabase from "./BaseDataBase"


export class ProductDataBase extends BaseDatabase{
    insert = async(product: Product) => {
        try {
            await BaseDatabase.connection('amaro_products').insert(product)
        } catch (error: any) {
            throw new Error (error.sqlMessage)
        }
    }

    getAllProducts = async()  => {
        try {
            const result: Product[] = await BaseDatabase.connection.raw(`
                SELECT * FROM amaro_products;
            `)
            return result[0]
        } catch (error: any) {
            throw new Error (error.sqlMessage)   
        }
    }

    getProductByName = async(name: string) => {
        const product = await BaseDatabase.connection.raw(`
            SELECT * FROM amaro_products WHERE name = "${name}";
        `)
        return product
    }

}