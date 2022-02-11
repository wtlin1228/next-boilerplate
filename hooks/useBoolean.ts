import { useState } from 'react'

export default function useBoolean() {
  return useState<boolean>(false)
}
