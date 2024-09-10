export const enum endpoints {
  auth = '/auth',
  login = '/login',

  user = '/user',
  me = `${user}/me`,

  todos = '/todos',
  todoId = `${todos}/:id`,
  todoAdd = `${todos}/add`,
}
