export interface IResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>
  error?: {
    code: number
    message: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: any[]
  }
}
