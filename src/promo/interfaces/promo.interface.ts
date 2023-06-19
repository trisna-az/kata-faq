import { Document } from 'mongoose';
export class Promo extends Document {
    readonly promo: String;
    readonly deskripsi: String;
}