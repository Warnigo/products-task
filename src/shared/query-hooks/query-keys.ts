export const queryKeys = {
  login: 'login',
  userMe: 'user-me',
  todos: 'todos',
  todoAdd: 'todoAdd',
  todoSingle: 'todoSingle',
  todoDelete: 'todoDelete',
  users: 'users',
  userSingle: (userId: number) => `${userId} user`,
  userSearch: 'user-search',
  userIdCarts: (userId: number) => `carts by ${userId} user`,
  userIdPosts: (userId: number) => `posts by ${userId} user`,
  userIdTodos: (userId: number) => `todos by ${userId} user`,
}
