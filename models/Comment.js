import mongoose, { Schema } from 'mongoose'

export const CommentSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    walletAddress: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    postId: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)
