import * as mongoose from 'mongoose';
export const TodoSchema = new mongoose.Schema({
    kritik: { type: String, index: true },
    saran: { type: String, default: null },
    promo: { type: String, default: null },
    status: { type: String, default: "TODO", index: true },
    timestamp: { type: Number, default: Date.now },
});