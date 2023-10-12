import mongoose, { Schema } from 'mongoose'
import { CommentSchema } from './Comment'
import { LikeSchema } from './Like'
import { CollectSchema } from './Collected'
import { BookMarkSchema } from './BookMark'

export const PostSchema = new Schema(
  {
    postId: String,
    userId: String,
    walletAddress: String,
    caption: String,
    comments: [CommentSchema],
    likes: [LikeSchema],
    collected: [CollectSchema],
    bookmarked: [BookMarkSchema],
  },
  {
    timestamps: true,
  },
)

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema)

export default Topic
