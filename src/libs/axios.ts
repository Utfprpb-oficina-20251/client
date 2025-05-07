import axios from 'axios'
import { API_URL, API_TIMEOUT } from "../config";

export const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export const instance = axios.create({
  baseURL: API_URL,
  timeout: Number(API_TIMEOUT),
});
