// src/services/BaseService.ts
import { AxiosError } from 'axios'
import { api } from '../libs/axios.ts'
import { HttpErrorHandler } from './HttpErrorHandler.ts'
import { ErrorResponse } from '@/commons/interfaces.ts'

export abstract class BaseService {
  protected constructor(protected baseUrl: string) {}

  protected async get<T>(url: string = ''): Promise<T> {
    try {
      return await api.get(`${this.baseUrl}${url}`)
    } catch (error) {
      if (this.isAxiosError(error)) {
        throw HttpErrorHandler.handle(error)
      }
      throw error // Re-throw if it's not an AxiosError
    }
  }

  protected async post<T, D = unknown>(data: D, url: string = ''): Promise<T> {
    try {
      return await api.post(`${this.baseUrl}${url}`, data)
    } catch (error) {
      if (this.isAxiosError(error)) {
        throw HttpErrorHandler.handle(error)
      }
      throw error
    }
  }

  protected async put<T, D = unknown>(data: D, url: string = ''): Promise<T> {
    try {
      return await api.put(`${this.baseUrl}${url}`, data)
    } catch (error) {
      if (this.isAxiosError(error)) {
        throw HttpErrorHandler.handle(error)
      }
      throw error
    }
  }

  protected async delete<T>(url: string = ''): Promise<T> {
    try {
      return await api.delete(`${this.baseUrl}${url}`)
    } catch (error) {
      if (this.isAxiosError(error)) {
        throw HttpErrorHandler.handle(error)
      }
      throw error
    }
  }

  private isAxiosError(error: unknown): error is AxiosError<ErrorResponse> {
    return (error as AxiosError<ErrorResponse>).isAxiosError !== undefined
  }
}
