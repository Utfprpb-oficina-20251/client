import { api } from '../libs/axios.ts'
import { Projeto } from '../commons/interfaces.ts'

const baseUrl = '/projeto'

const save = async (projeto: Projeto) => {
  let response
  try {
    response = await api.post(baseUrl, projeto)
  } catch (error) {
    response = error.response
  }
  return response
}

const findById = async (id: number) => {
  let response
  try {
    response = await api.get(`${baseUrl}/${id}`)
  } catch (error) {
    response = error.response
  }
  return response
}

const findAll = async () => {
  let response
  try {
    response = await api.get(baseUrl)
  } catch (error) {
    response = error.response
  }
  return response
}

const remove = async (id: number) => {
  let response
  try {
    response = await api.delete(`${baseUrl}/${id}`)
  } catch (error) {
    response = error.response
  }
  return response
}

const ProjetoService = {
  save,
  findById,
  findAll,
  remove,
}

export default ProjetoService
