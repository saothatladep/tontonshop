import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const imgSchema = mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    sku: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    salesOff: { type: Number, required: true, default: 0 },
    priceSalesOff: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
      max: 100,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    material: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    dimensions: {
      length: { type: Number, default: 0 },
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 },
    },
    images: [imgSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
