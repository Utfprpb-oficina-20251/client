import AuthService from '../AuthService'
import { api } from '../../libs/axios'
import { IUserSignIn } from '../../commons/interfaces'

jest.mock('../../libs/axios') // Mock axios
const mockedApi = api as jest.Mocked<typeof api>

describe('AuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  describe('signup', () => {
    it('should send a POST request to /users and return the response', async () => {
      const mockUser: IUserSignIn = {
        displayName: 'Test User',
        username: 'testuser',
        password: 'password123',
      }
      const mockResponse = { data: { success: true } }
      mockedApi.post.mockResolvedValueOnce(mockResponse)

      const response = await AuthService.signup(mockUser)

      expect(mockedApi.post).toHaveBeenCalledWith('/users', mockUser)
      expect(response).toEqual(mockResponse)
    })

    it('should handle errors and return the error response', async () => {
      const mockUser: IUserSignIn = {
        displayName: 'Test User',
        username: 'testuser',
        password: 'password123',
      }
      const mockError = { response: { status: 400, data: { error: 'Bad Request' } } }
      mockedApi.post.mockRejectedValueOnce(mockError)

      const response = await AuthService.signup(mockUser)

      expect(mockedApi.post).toHaveBeenCalledWith('/users', mockUser)
      expect(response).toEqual(mockError.response)
    })
  })

  describe('login', () => {
    it('should send a POST request to /login and store the token on success', async () => {
      const mockUser: IUserSignIn = {
        displayName: 'Test User',
        username: 'testuser',
        password: 'password123',
      }
      const mockResponse = { status: 200, data: { token: 'mockToken' } }
      mockedApi.post.mockResolvedValueOnce(mockResponse)

      const response = await AuthService.login(mockUser)

      expect(mockedApi.post).toHaveBeenCalledWith('/login', mockUser)
      expect(localStorage.setItem).toHaveBeenCalledWith('token', JSON.stringify('mockToken'))
      expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockUser.username))
      expect(response).toEqual(mockResponse)
    })

    it('should handle errors and return the error response', async () => {
      const mockUser: IUserSignIn = {
        displayName: 'Test User',
        username: 'testuser',
        password: 'password123',
      }
      const mockError = { response: { status: 401, data: { error: 'Unauthorized' } } }
      mockedApi.post.mockRejectedValueOnce(mockError)

      const response = await AuthService.login(mockUser)

      expect(mockedApi.post).toHaveBeenCalledWith('/login', mockUser)
      expect(response).toEqual(mockError.response)
    })
  })

  describe('isAuthenticated', () => {
    it('should return true if a token exists in localStorage', () => {
      localStorage.setItem('token', JSON.stringify('mockToken'))

      const result = AuthService.isAuthenticated()

      expect(result).toBe(true)
    })

    it('should return false if no token exists in localStorage', () => {
      const result = AuthService.isAuthenticated()

      expect(result).toBe(false)
    })
  })

  describe('isAuthenticatedTokenValid', () => {
    it('should return true if the token is valid', async () => {
      localStorage.setItem('token', JSON.stringify('mockToken'))
      const mockResponse = { status: 200 }
      mockedApi.get.mockResolvedValueOnce(mockResponse)

      const result = await AuthService.isAuthenticatedTokenValid()

      expect(mockedApi.get).toHaveBeenCalledWith('/users/validatetoken')
      expect(result).toBe(true)
    })

    it('should return false if the token is invalid', async () => {
      localStorage.setItem('token', JSON.stringify('mockToken'))
      mockedApi.get.mockRejectedValueOnce(new Error('Invalid token'))

      const result = await AuthService.isAuthenticatedTokenValid()

      expect(result).toBe(false)
    })
  })

  describe('logout', () => {
    it('should remove the token and clear the Authorization header', () => {
      localStorage.setItem('token', JSON.stringify('mockToken'))
      AuthService.logout()

      expect(localStorage.getItem('token')).toBeNull()
      expect(api.defaults.headers.common['Authorization']).toBe('')
    })
  })
})