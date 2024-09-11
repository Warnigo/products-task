export const enum endpoints {
  auth = '/auth',
  login = '/login',

  user = '/user',
  me = `${user}/me`,

  todos = '/todos',
  todoId = `${todos}/:id`,
  todoAdd = `${todos}/add`,
  todoRandom = `${todos}/random/10`,

  users = '/users',
  userId = `${users}/:id`,
  userSearch = `${users}/search?q=:name`,
  userIdTodos = `${users}/:id/todos`,
  userIdCarts = `${users}/:id/carts`,
  userIdPosts = `${users}/:id/posts`,

  userAdd = `${users}/add`,
}
