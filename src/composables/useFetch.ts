import { FetchContext, FetchResponse, ofetch } from 'ofetch'

const logs = (action?: string | Request, prompt?: string, ...args: any) => {
  console.log(`${action} ${prompt} =>`, ...args)
}

const instance = ofetch.create({
  baseURL: 'http://localhost:8088/api/v1',
  onRequest(context: FetchContext): Promise<void> | void {
    const { request, options } = context
    const { baseURL, query, params } = options
    options.headers = Object.assign({
    }, options.headers)
    let requestUrl
    if (typeof request === 'string') {
      requestUrl = request.startsWith('http') ? request : baseURL + request
    }
    logs(requestUrl, '请求参数', query || params)
  },
  onRequestError(context: FetchContext & { error: Error }): Promise<void> | void {
    return Promise.reject(context.error)
  },
  onResponse<R>(context: FetchContext & { response: FetchResponse<R> }): Promise<void> | void {
    const { response, request } = context
    if (response.ok) { logs(request, '请求返回', response._data) }
    return response._data
  },
  onResponseError<R>(context: FetchContext & { response: FetchResponse<R> }): Promise<void> | void {
    const { response } = context
    console.log('请求响应错误 => ', response)
    const { msg } = response._data
    const err = response
      ? `网络繁忙，请稍后再试[${response.status}]`
      : '网络繁忙，请稍后再试(3)'
    return Promise.reject(msg || err)
  }
})

export const curl = async (url: string, data: {[key: string]: any}, options: {[key: string]: any} = {}) => {
  const { method } = options = Object.assign({
    url,
    loading: true,
    method: 'post',
    headers: {}
  }, options)
  options[method === 'get' ? 'query' : 'body'] = data
  const { data: resData } = await instance(url, options)
  return resData
}
