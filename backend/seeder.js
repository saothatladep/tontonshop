import mongoose from 'mongoose'
import dotenv from 'dotenv'
import color from 'colors'
import types from './data/types.js'
import users from './data/users.js'
import categories from './data/categories.js'
import catalogues from './data/catalogues.js'
import products from './data/products.js'
import Type from './models/type.model.js'
import User from './models/user.model.js'
import Category from './models/category.model.js'
import Catalogue from './models/catalogue.model.js'
import Product from './models/product.model.js'
import Order from './models/order.model.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    // await Category.deleteMany()
    // await Catalogue.deleteMany()
    // await Product.deleteMany()
    // await Order.deleteMany()
    // await User.deleteMany()


    // const createdUsers = await User.insertMany(users)

    // const adminUser = createdUsers[0]._id

    // const sampleCatalogues = catalogues.map((catalogue) => {
    //   return { ...catalogue, user: adminUser }
    // })

    // await Catalogue.insertMany(sampleCatalogues)

    // await Category.insertMany(categories)
    // await Type.insertMany(types)
    // await Product.insertMany(products)



    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Category.deleteMany()
    await Catalogue.deleteMany()
    await Product.deleteMany()
    await Order.deleteMany()
    await User.deleteMany()


    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
