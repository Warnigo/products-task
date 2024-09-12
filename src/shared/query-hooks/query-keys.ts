export const queryKeys = {
  login: 'login',

  userMe: 'user-me',
  userSingle: (userId: number) => `user-${userId}`,
  userIdCarts: (userId: number) => `user-${userId}-carts`,
  userIdPosts: (userId: number) => `user-${userId}-posts`,
  userIdTodos: (userId: number) => `user-${userId}-todos`,

  users: 'users',
  usersSearch: 'users-search',

  todos: 'todos',
  todoRandom: 'todo-random',
  todoAdd: 'todo-add',
  todoSingle: 'todo-single',
  todoDelete: 'todo-delete',

  allPosts: 'all-posts',
  postSingle: (postId: string) => `post-${postId}`,
  postSearch: 'post-search',
  postAdd: 'post-add',
  postDelete: 'post-delete',
  postUpdate: 'post-update',
  postComment: (postId: string) => `post-${postId}-comment`,

  products: 'products',
  productSingle: (id: string) => `product-${id}`,
  productSearch: 'product-search',
  productCategoryList: 'product-category-list',
  productCategoryName: (name: string) => `product-category-${name}`,
}
