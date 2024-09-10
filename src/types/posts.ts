import { UsersResponse } from './users'

export interface PostsResponse<T> extends Omit<UsersResponse<T>, 'users'> {
  posts: T
}

export interface Post {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
}
