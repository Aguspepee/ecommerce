const cartManager = require('../classes/carts/cartManager')
const carts = new cartManager('./classes/carts/carts.json')

module.exports = {
    getAll: async function (req, res, next) {
        try {
            let data = carts.getCarts()
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
        let cid = req.params.cid
        try {
            let cart = carts.getCartById(Number(cid))
            res.json(cart)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    create: async function (req, res, next) {
        console.log(req.body)
        try {
            let cart = carts.addCart(req.body[0])
            res.json(cart)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    addProductToCart: async function (req, res, next) {
        let cid = req.params.cid
        let pid = req.params.pid
        try {
            let cart = carts.addProductToCart({pid, cid})
            res.json(cart)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    edit: async function (req, res, next) {
        console.log("edit")
        let cid = req.params.cid
        try {
            let cart = carts.updateCart({...req.body[0], id: cid})
            res.json(cart)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },

    delete: async function (req, res, next) {
        console.log("edit")
        let cid = req.params.cid
        try {
            let cart = carts.deleteCart(cid)
            res.json(cart)
        } catch (e) {
            console.log(e)
            e.status = 400
            next(e)
        }
    },
}