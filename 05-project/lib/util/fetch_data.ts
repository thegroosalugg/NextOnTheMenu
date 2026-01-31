export type ApiError = { [key: string]: string } & { status: number }

export interface Fetch {
       url: string
   method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
     data?: FormData | Record<string, unknown>
  headers?: Record<string, string>
    token?: string
}

export const fetchData = async ({
      url,
   method = 'GET',
     data,
  headers: headersInit = {},
    token,
}: Fetch) => {
  const isFile = data instanceof FormData // multipart/form-data
  const body = data ? (isFile ? data : JSON.stringify(data)) : null
  const headers: HeadersInit = { ...headersInit }
  if (!isFile) headers['Content-Type'] = 'application/json'

  // refresh token not used in demo: logic retained as pattern reusable for any token based auth
  const makeRequest = async (token?: string) => {
    if (token) headers['Authorization'] = `Bearer ${token}`
    return fetch(url, { method, headers, body })
  }

  let response = await makeRequest(token)

  if (response.status === 401) {
    const newToken = 'token' // demo only: replace with token refresh function
    if (newToken) response = await makeRequest(newToken)
  }

  const resData = await response.json()

  if (!response.ok) throw { ...resData, status: response.status } as ApiError

  return resData
}
