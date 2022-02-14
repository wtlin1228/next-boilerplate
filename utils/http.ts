// Note:
//   Assume the api responses follow this schema:
//   object {
//     object {...}* data?;
//     object {
//       integer code?;
//       string message?;
//     }* error?;
//   }*;
export async function httpGet<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(input, init)

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
