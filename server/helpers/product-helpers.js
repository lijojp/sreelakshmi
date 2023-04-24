import db from '../database/mongodb.js'
import * as collection from '../config/collections.js'
import { ObjectId } from 'mongodb';
import  fs from 'fs'
import { promisify } from 'util';
const unlinkAsync = promisify(fs.unlink)

export const addProducts = (product) => {
    return new Promise((resolve, reject) => {
        // product.view = parseInt(product.view)
        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data) => {
            resolve()
        })
    })
}