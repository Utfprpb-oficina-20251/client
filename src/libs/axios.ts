import axios from 'axios'
import { API_TIMEOUT, API_URL } from '../config'

export const api = axios.create({
  baseURL: 'http://localhost:8080/api',
})

export const instance = axios.create({
  baseURL: API_URL,
  timeout: Number(API_TIMEOUT),
})
