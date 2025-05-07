import { AxiosError } from 'axios'

export interface ErrorResponse {
  message: string
  status: number
  data?: unknown
  code?: string
}

export class HttpErrorHandler {
  static handle(error: AxiosError): ErrorResponse {
    if (error.response) {
      return {
        message: error.response.data?.message || 'Erro na requisição',
        status: error.response.status,
        data: error.response.data,
        code: error.code,
      }
    }

    if (error.request) {
      return {
        message: 'Servidor não respondeu à requisição',
        status: 503,
        code: 'SERVICE_UNAVAILABLE',
      }
    }

    return {
      message: 'Erro ao configurar a requisição',
      status: 500,
      code: 'INTERNAL_ERROR',
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
