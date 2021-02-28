import mongoose from 'mongoose';

const categorySchema = mongoose.schema({
    name: {
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
    dateCreated: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
});

const Category = mongoose.model('Category', categorySchema),

export default Category;