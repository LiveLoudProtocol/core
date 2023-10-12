import mongoose, { Schema } from 'mongoose'

export const FollowingSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    walletAddress: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
)
