import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  // Fetch books with filters
  const fetchBooksfilter = async () => {
    try {
      const query = new URLSearchParams();

      if (filterStatus) query.append('status', filterStatus);
      if (filterCategory) query.append('category', filterCategory);

      const res = await axios.get(`/api/all?${query.toString()}`);
      setBooks(res.data.books); // Because backend returns { count, books }
    } catch (err) {
      console.error('Error fetching books:', err);
    }
  };

  // Add new book
  const addBook = async (book) => {
    const res = await axios.post('/api/add', book);
    setBooks((prev) => [...prev, res.data]);
  };

  // Update book
  const updateBook = async (id, updatedData) => {
    const res = await axios.put(`/api/edit/${id}`, updatedData);
    setBooks((prev) =>
      prev.map((book) => (book._id === id ? res.data : book))
    );
  };

  // Delete book
  const deleteBook = async (id) => {
    await axios.delete(`/api/delete/${id}`);
    setBooks((prev) => prev.filter((book) => book._id !== id));
  };

  // Fetch books on filter change
  useEffect(() => {
    fetchBooksfilter();
  }, [filterStatus, filterCategory]);

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        deleteBook,
        filterStatus,
        setFilterStatus,
        filterCategory,
        setFilterCategory,
        fetchBooksfilter, // Optional if you want to manually trigger it elsewhere
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
