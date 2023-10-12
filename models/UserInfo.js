import mongoose, { Schema } from 'mongoose'

export const UserInfoSchema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    walletAddress: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: String,
    bio: String,
    website: String,
    twitter: String,
  },
  {
    timestamps: true,
  },
)
