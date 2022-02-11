import { renderHook, act } from '@testing-library/react-hooks'
import useBoolean from '../useBoolean'

it('returns an array', () => {
  const { result } = renderHook(useBoolean)

  expect(result.current).toStrictEqual([false, expect.any(Function)])
})

it('sets boolean to true', () => {
  const { result } = renderHook(useBoolean)

  act(() => result.current[1](true))

  expect(result.current[0]).toBe(true)
})
