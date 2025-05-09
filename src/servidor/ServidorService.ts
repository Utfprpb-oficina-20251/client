import { BaseService } from '@/utils/BaseService.ts'
import { Servidor } from '@/commons/interfaces.ts'
import { AxiosResponse } from 'axios'

interface Response {
  token: string
  expiresIn: number
}

class ServidorService extends BaseService {
  constructor() {
    super('/usuarios/servidor')
  }

  async save(servidor: Servidor): Promise<void> {
    const response: unknown = await this.post<Servidor>(servidor)
    if (response) {
      const temp = response as AxiosResponse<Response>
      localStorage.setItem('token', JSON.stringify(temp.data.token))
    }
  }

  async findById(id: number): Promise<Servidor> {
    return this.get<Servidor>(`/${id}`)
  }

  async findAll(): Promise<Servidor[]> {
    return this.get<Servidor[]>()
  }

  async remove(id: number): Promise<void> {
    return this.delete(`/${id}`)
  }
}

export default new ServidorService()
