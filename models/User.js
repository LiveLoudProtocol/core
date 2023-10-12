import mongoose, { Schema } from 'mongoose'
import { PostSchema } from './Post.js'
import { UserInfoSchema } from './UserInfo.js'
import { CommentSchema } from './Comment.js'
import { FollowerSchema } from './Follower.js'
import { FollowingSchema } from './Following.js'
import { CollectSchema } from './Collected.js'
import { BookMarkSchema } from './BookMark.js'

const userSchema = new Schema(
  {
    userId: String,
    walletAddress: String,
    Info: UserInfoSchema,
    posts: [PostSchema],
    comments: [CommentSchema],
    followers: [FollowerSchema],
    following: [FollowingSchema],
    collected: [CollectSchema],
    bookmarked: [BookMarkSchema],
    description: String,
  },
  {
    timestamps: true,
  },
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
