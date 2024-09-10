export interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export interface Response<T> {
  todos: T
  total: number
  skip: number
  limit: number
}

export interface TodoAddParams {
  todo: string
  completed: boolean
  userId: number
}
