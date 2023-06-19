import { Document } from 'mongoose';
export class Todo extends Document {
    readonly kritik: String;
    readonly saran: String;
    readonly promo: String;
}