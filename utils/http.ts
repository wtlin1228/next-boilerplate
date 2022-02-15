// Note:
//   Assume the api responses follow this schema:
//   object {
//     object {
//      ...
//     }* data?;
//     object {
//       integer code?;
//       string message?;
//     }* error?;
//   }*;

export function makeHttpRequest(method: 'GET' | 'POST' | 'PUT' | 'PATCH') {
  return async function httpRequest<T>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<T> {
    const response = await fetch(input, { method, ...init })

    let json
    try {
      json = await response.json()
    } catch {
      // 5xx
      throw new Error('Something went wrong in the server.')
    }

    if (!response.ok) {
      // 4xx
      throw new Error(json.error.message)
    }

    // 2xx
    return json.data
  }
}

export const httpGet = makeHttpRequest('GET')
export const httpPOST = makeHttpRequest('POST')
export const httpPUT = makeHttpRequest('PUT')
export const httpPATCH = makeHttpRequest('PATCH')
