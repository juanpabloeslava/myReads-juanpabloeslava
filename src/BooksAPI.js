
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Get a single Book's details
export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

// Get all Books' details
export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

// Move Book between Bookshelves
export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

// Search for books
export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
