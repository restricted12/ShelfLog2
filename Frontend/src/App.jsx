import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BookProvider } from './store/BookContext'
import BookForm from './components/BookForm'
import BookList from './components/BookList'

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BookForm />} />
          <Route path="/add" element={<BookList />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </BookProvider>
  )
}

export default App
