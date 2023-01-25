const productManager = require('../classes/products/productManager')
const products = new productManager('./classes/products/productos.json')

module.exports = {
    getAll: async function (req, res, next) {
        try {
            let data = products.getProducts()
            let limit = req.query.limit
            data = limit ? data.slice(0, limit) : data
            res.json(data)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    getById: async function (req, res, next) {
        let pid = req.params.pid
        try {
            let product = products.getProductById(Number(pid))
            res.json(product)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    create: async function (req, res, next) {
        console.log(req.body)
        try {
            let product = products.addProduct(req.body)
            res.json(product)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    edit: async function (req, res, next) {
        console.log("edit")
        let pid = req.params.pid
        try {
            let product = products.updateProduct({...req.body[0], id: pid})
            res.json(product)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    delete: async function (req, res, next) {
        console.log("edit")
        let pid = req.params.pid
        try {
            let product = products.deleteProduct(pid)
            res.json(product)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },


}