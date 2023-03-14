export const $api = {
  userRegistration: (data:userRegistration, loading = true) => curl('users/create', data, { loading, method: 'post' }),

  getArticleList: (data = {}, loading = true) => curl('article/findAll', data, { loading, method: 'get' })
}

export interface userRegistration {
  email: string,
  password: string
}
