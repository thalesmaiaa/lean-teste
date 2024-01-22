import { env } from '@/validations/envValidations'
import axios from 'axios'

export const API_SERVER_URL = env.NEXT_PUBLIC_API_URL
export const API_DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const api = axios.create({
  baseURL: API_SERVER_URL,
})
