import * as mongoose from 'mongoose';
export const PromoSchema = new mongoose.Schema({
    promo: { type: String, index: true },
    deskripsi: { type: String, default: null },
    status: { type: String, default: "PROMO", index: true },
    timestamp: { type: Number, default: Date.now },
});