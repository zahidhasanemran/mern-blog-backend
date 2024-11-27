import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
    title: string;
    content: string;
    author: mongoose.Types.ObjectId;
}

const BlogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<IBlog>("Blog", BlogSchema);
