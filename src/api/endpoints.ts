export const enum endpoints {
  auth = '/auth',
  login = '/login',

  user = '/user',
  me = '/user/me',

  todos = '/todos',
  todoId = '/todos/:id',
  todoAdd = '/todos/add',
  todoRandom = '/todos/random/10',

  users = '/users',
  userId = '/users/:id',
  userSearch = '/users/search?q=:name',
  userIdTodos = '/users/:id/todos',
  userIdCarts = '/users/:id/carts',
  userIdPosts = '/users/:id/posts',

  posts = '/posts',
  postId = '/posts/:id',
  postSearch = '/posts/search?q=:name',
  postComments = '/posts/:id/comments',
  postAdd = '/posts/add',

  products = '/products',
  productSingle = '/products/:id',
  productSearch = '/products/search?q=:name',
  productCategoryList = '/products/category-list',
  productCategoryName = '/products/category/:name',
}
