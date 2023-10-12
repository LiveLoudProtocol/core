import mongoose, { Schema } from 'mongoose'

export const CollectSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    walletAddress: { type: String, required: true, unique: true },
    postId: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)
