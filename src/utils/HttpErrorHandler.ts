import { ErrorResponse } from '@/commons/interfaces'
import { AxiosError } from 'axios'

export class HttpErrorHandler {
  static handle(error: AxiosError<ErrorResponse>): ErrorResponse {
    const baseUrl = error.config?.url || ''

    if (error.response) {
      return {
        timestamp:
          error.response.data.timestamp || new Date().getMilliseconds(),
        message: error.response.data.message,
        status: error.response.status,
        url: baseUrl,
        validationErrors: error.response.data.validationErrors || [],
      }
    }

    if (error.request) {
      return {
        timestamp: new Date().getMilliseconds(),
        message: 'Servidor não respondeu à requisição',
        status: 503,
        url: baseUrl,
        validationErrors: [],
      }
    }

    return {
      timestamp: new Date().getMilliseconds(),
      message: 'Erro ao configurar a requisição',
      status: 500,
      url: baseUrl,
      validationErrors: [],
    }
  }

  static isNotFoundError(error: ErrorResponse): boolean {
    return error.status === 404
  }

  static isUnauthorizedError(error: ErrorResponse): boolean {
    return error.status === 401
  }

  static isForbiddenError(error: ErrorResponse): boolean {
    return error.status === 403
  }

  static isValidationError(error: ErrorResponse): boolean {
    return error.status === 400
  }

  static isServerError(error: ErrorResponse): boolean {
    return error.status >= 500
  }
}
