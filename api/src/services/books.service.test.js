const { generateManyBooks, generateOneBook } = require('../fakes/book.fake')
const BooksService = require('./books.service')

// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Clean Code',
//   },
// ];

// const MongoListSub = {
//   getAll: () => [...fakeBooks],
//   create: () => { },
// };

const mockGetAll = jest.fn()
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => { }
})))

describe('Test for BookService', () => {
  let service
  beforeEach(() => {
    service = new BooksService()
    jest.clearAllMocks()
  })

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(10)
      mockGetAll.mockResolvedValue(fakeBooks)

      // Act
      const books = await service.getBooks({})

      // Assert
      expect(books.length).toEqual(fakeBooks.length)
      expect(mockGetAll).toHaveBeenCalled()
      expect(mockGetAll).toHaveBeenCalledTimes(1)
      expect(mockGetAll).toHaveBeenCalledWith('books', {})
    })

    test('should return a name book', async () => {
      // Arrange
      const fakeBooks = generateOneBook()
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks({})
      console.log(books)
      console.log(books.name)
      console.log(fakeBooks.name)
      // Assert
      expect(books.name).toEqual(fakeBooks.name)
    })
  })
})
