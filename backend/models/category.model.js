import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
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
    catalogue: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Catalogue',
    },
}, {
    timestamps: true,
});

const Category = mongoose.model('Category', categorySchema)

export default Category;