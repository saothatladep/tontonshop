import mongoose from 'mongoose'

const typeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    imgDimensions: {
      width: {
        type: String,
        required: true,
      },
      height: {
        type: String,
        required: true,
      },
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Type = mongoose.model('Type', typeSchema)

export default Type
