import mongoose from 'mongoose'

const catalogueSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 1,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'User',
    },
    type: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'Type',
    },
  },
  {
    timestamps: true,
  }
)

const Catalogue = mongoose.model('Catalogue', catalogueSchema)

export default Catalogue
