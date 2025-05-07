// src/services/BaseService.ts
import { AxiosError } from 'axios'
import { api } from '../libs/axios.ts'
import { HttpErrorHandler } from './HttpErrorHandler.ts'

export abstract class BaseService {
  protected constructor(protected baseUrl: string) {}

  protected async get<T>(url: string = ''): Promise<T> {
    try {
      const response = await api.get(`${this.baseUrl}${url}`)
      return response.data
    } catch (error) {
      throw HttpErrorHandler.handle(error as AxiosError)
    }
  }

  protected async post<T>(data: any, url: string = ''): Promise<T> {
    try {
      const response = await api.post(`${this.baseUrl}${url}`, data)
      return response.data
    } catch (error) {
      throw HttpErrorHandler.handle(error as AxiosError)
    }
  }

  protected async put<T>(data: any, url: string = ''): Promise<T> {
    try {
      const response = await api.put(`${this.baseUrl}${url}`, data)
      return response.data
    } catch (error) {
      throw HttpErrorHandler.handle(error as AxiosError)
    }
  }

  protected async delete<T>(url: string = ''): Promise<T> {
    try {
      const response = await api.delete(`${this.baseUrl}${url}`)
      return response.data
    } catch (error) {
      throw HttpErrorHandler.handle(error as AxiosError)
    }
  }
}
