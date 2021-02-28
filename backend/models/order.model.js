import mongoose from 'mongoose';

const orderSchema = mongoose.schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            img: { type: String, required: true },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },
        },
    ],
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },

    },
    paymentMethods: {
        type: String,
        required: true,
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxPrice: {
        type: number,
        required: true,
        default: 0,
    },

    shippingPrice: {
        type: number,
        required: true,
        default: 0,
    },

    totalPrice: {
        type: number,
        required: true,
        default: 0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
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

const Order = mongoose.model('Order', orderSchema),

export default Order;