import mongoose from 'mongoose';

const userSchema = mongoose.schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    status: {
        type: Number,
        required: true,
        default: 1,
    },
    dateCreated: {
        type: Date,
        default:Date.now,
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema),

export default User;