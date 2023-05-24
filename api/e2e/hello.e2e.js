const request = require('supertest')
const createApp = require('../src/app')

describe('Test for hello endpoint', () => {
  let app = null
  let server = null

  beforeAll(() => {
    app = createApp()
    server = app.listen(3002)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('test for [GET] /', () => {
    test('Should return "Hello world"', async () => {
      const response = await request(app).get('/')
      expect(response.statusCode).toEqual(200)
      expect(response.text).toEqual('Hello World!')
    })
  })
})
