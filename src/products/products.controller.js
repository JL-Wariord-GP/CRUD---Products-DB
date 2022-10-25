const uuid = require('uuid')
const Products = require('../models/products.models')

const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}
//! CREATE PRODUCT
const creatProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable
    })
    return newProduct
}

creatProduct({
    id: "",
    name: 'Azucar',
    category: 'Alimento',
    price: 1200,
    isAvailable: false
})
//! WE SELECT PRODUCT
const getProductById = async (id) => {
    const data = await Products.findOne({
        where:{
            id: id
        }
    })
    return data
}
//! EDIT SELECT PRODUCT
const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where:{
            id: id
        }
    })
    return response
}
//! DELET SELECT PRODUCT
const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where:{
            id: id
        }
    })
    return data
}

module.exports = {
    getAllProducts,
    getProductById,
    creatProduct,
    editProduct,
    deleteProduct
}
