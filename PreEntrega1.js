class ProductManager {
    constructor() {
    this.products = []
    this.productId = 0
    }

    addProduct(product) {
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error('Por favor complete todos los campos')
        return
    }

    const productExists = this.products.find(p => p.code === product.code)
    if (productExists) {
        console.error(`Ya hay un producto con el code: ${product.code}`)
        return
    }
    this.productId++
    const newProduct = { id: this.productId, ...product }
    this.products.push(newProduct)
    console.log(`Se ha agregado el producto con ID ${this.productId}`)
    }

    getProducts() {
    return this.products
    }

    getProductById(id) {
    const product = this.products.find(p => p.id === id)
    if (product) {
        return product
    } else {
        console.error(`No se ha encontrado el producto ID: ${id}`)
            }
        }
}

const exampleProduct1 = {
    title: "Vaso",
    description: "Un vaso con agua",
    price: 250,
    thumbnail: "www.ejemploimagen.com/img1.png",
    code: "000111222",
    stock: 200
}

const exampleProduct2 = {
    title: "Jarron",
    description: "Un jarron asiatico",
    price: 388,
    thumbnail: "www.ejemploimagen.com/img2.png",
    code: "000333222",
    stock: 33
}

const exampleProduct3 = {
    title: "Computadora",
    description: "Una PC gamer muy potente",
    price: 10000,
    thumbnail: "www.ejemploimagen.com/img3.png",
    code: "000333444",
    stock: 55
}

const admin = new ProductManager()
admin.addProduct(exampleProduct1)
admin.addProduct(exampleProduct2)
admin.addProduct(exampleProduct3)


console.log(admin.getProducts())
