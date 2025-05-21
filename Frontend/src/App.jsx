import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BookProvider } from './store/BookContext'
import BookForm from './components/BookForm';
import Header from './components/Header';
import Footer from './components/footer';
// import BookList from './components/BookList'
import Home from './pages/Home'
const App = () => {
  return (
    <BookProvider>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<BookForm />} />
          
        </Routes>
        <Footer/>
      </Router>
      
    </BookProvider>
  )
}

export default App;
