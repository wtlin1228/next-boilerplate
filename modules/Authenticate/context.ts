import type { IAuthenticateContext } from './type'
import { createContext } from 'react'

export default createContext<IAuthenticateContext | null>(null)
