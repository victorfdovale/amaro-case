import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductDTO } from "../entities/Product";


export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ){}

    register = async (req: Request, res: Response): Promise<void> => {
        const {name, tags} = req.body
        const input : ProductDTO = {
            name,
            tags
        }
        try {
            const result = await this.productBusiness.register(input)
            res.status(201).send({message: 'Produto adicionado com sucesso!', result})
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }
    
    getAllProducts = async (req: Request, res: Response) => {
        try {
            const allProducts = await this.productBusiness.getAllProducts()
            res.status(200).send({allProducts})
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
    }

    getProductByName = async(req: Request, res: Response) => {
        const name = req.params.name
        try {
            const product = await this.productBusiness.getProductByName(name)
            res.status(200).send({product})
        } catch (error: any) {
            res.status(400).send({message: error.message})
        }
        
    }

}