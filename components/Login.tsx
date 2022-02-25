import { useRef } from 'react'
import useLoginMutation from '@/hooks/useLoginMutation'
import useAuthenticateQuery from '@/hooks/useAuthenticateQuery'

export default function Login() {
  const { mutate, isError, isLoading, isSuccess, error } = useLoginMutation()
  const inputRef = useRef<HTMLInputElement>(null)

  useAuthenticateQuery({ queryOptions: { enabled: isSuccess } })

  return (
    <div style={{ marginTop: 50 }}>
      <div>
        <label htmlFor="login-input">Token: </label>
        <input ref={inputRef} id="login-input" />
        <button
          onClick={() => {
            if (inputRef.current && inputRef.current.value) {
              mutate(inputRef.current.value)
            }
          }}
        >
          Login
        </button>
      </div>
      <div>
        {isError && <label>Login Fail 😭 {error?.message}</label>}
        {isLoading && <label>Login...</label>}
        {isSuccess && <label>Login success ✅</label>}
      </div>
    </div>
  )
}
