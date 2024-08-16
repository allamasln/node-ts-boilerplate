import { StatusCodes } from 'http-status-codes'
import request from 'supertest'

import { app } from '@/app'

describe('Health Check API endpoints', () => {
  it('GET / - success', async () => {
    const response = await request(app).get('/health')

    expect(response.statusCode).toEqual(StatusCodes.OK)

    expect(response.body).toEqual({
      success: true,
    })
  })
})
