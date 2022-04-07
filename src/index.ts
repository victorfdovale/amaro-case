import app from './app'
import { ProductBusiness } from './business/ProductBusiness'
import { ProductController } from './controller/ProductController'
import { ProductDataBase } from './data/ProductDataBase'

const productController = new ProductController(
    new ProductBusiness(
        new ProductDataBase()
    )
)

app.post('/register', productController.register)
app.get('/products', productController.getAllProducts)
app.get('/product/:name', productController.getProductByName)