const { MongoClient } = require('mongodb')
const request = require('supertest')
const createApp = require('../src/app')
const { config } = require('../src/config/')

const DB_NAME = config.dbName
const MONGO_URI = config.dbUrl

describe('Test for books', () => {
  let app = null
  let server = null
  let database = null

  beforeAll(async () => {
    app = createApp()
    server = app.listen(3002)
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await client.connect()
    database = client.db(DB_NAME)
  })

  afterAll(async () => {
    await server.close()
    await database.dropDatabase()
  })

  describe('test for [GET] /api/v1/books', () => {
    test('Should return "a list books"', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'book2',
          year: 1998,
          author: 'nicolas'
        },
        {
          name: 'book1',
          year: 1998,
          author: 'nicolas'
        }
      ])
      console.log('seedData')
      console.log(seedData)
      // Act
      const response = await request(app).get('/api/v1/books')
      // Assert
      expect(response.status).toEqual(200)
      expect(response.body.length).toEqual(seedData.insertedCount)
    })
  })
})
