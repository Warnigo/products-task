import { TodosResponse } from './todos'

export interface CommentsResponse<T> extends Omit<TodosResponse<T>, 'todos'> {
  comments: T
}

export interface Comment {
  id: number
  body: string
  postId: number
  likes: number
  user: {
    id: number
    username: string
    fullName: string
  }
}

export interface CommentRequest {
  body: string
  userId: number
}
