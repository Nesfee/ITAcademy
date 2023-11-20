const axios = require('axios');
const Validator = require('jsonschema').Validator;
const bookAPIGet = require('../data/booksAPIschemaGet.json')
const bookAPIOther = require('../data/booksAPIschemaOther.json')
const validate = new Validator();

describe('API positive tests', () => {
  test('Get all books', async () => {
    const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books');
    const result = validate.validate(response.data, bookAPIGet)
    expect(response.status).toBe(200);
    expect(result.valid).toBe(true);
  });

  test('Get a specific book', async () => {
    const specificBookId = 1;
    const response = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${specificBookId}`);
    const result = validate.validate(response.data, bookAPIOther)
    expect(response.status).toBe(200);
    expect(result.valid).toBe(true);
  });

  test('Add a new book', async () => {
    const newBook = {
      "id": 0,
      "title": "string",
      "description": "string",
      "pageCount": 0,
      "excerpt": "string",
      "publishDate": "2023-11-19T16:33:57.660Z"
  };
    const response = await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Books', newBook);
    const result = validate.validate(response.data, bookAPIOther)
    expect(response.status).toBe(200);
    expect(result.valid).toBe(true);
  });

  test('Update a book', async () => {
    const specificBookId = 3;
    const bookToUpdate = {
      "id": 0,
      "title": "string",
      "description": "string",
      "pageCount": 0,
      "excerpt": "string",
      "publishDate": "2023-11-19T16:33:57.660Z"
    };
    const response = await axios.put(`https://fakerestapi.azurewebsites.net/api/v1/Books/${specificBookId}`, bookToUpdate);
    const result = validate.validate(response.data, bookAPIOther)
    expect(response.status).toBe(200);
    expect(result.valid).toBe(true);
  });

  test('Delete a book', async () => {
    const bookIdToDelete = 1;
    const response = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${bookIdToDelete}`);
    expect(response.status).toBe(200);
  });
})