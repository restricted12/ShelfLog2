import React, { useState, useContext, useEffect } from 'react';
import { BookContext } from '../store/BookContext';
import { useNavigate } from 'react-router-dom';

const BookForm = ({ initialData = null }) => {
  const { addBook, updateBook } = useContext(BookContext);
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    status: 'to-read',
    notes: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (initialData) {
      setBook(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (initialData) {
      await updateBook(initialData._id, book);
      setSuccessMessage('Book updated successfully!');
    } else {
      await addBook(book);
      setSuccessMessage('Book added successfully!');
      setBook({
        title: '',
        author: '',
        category: '',
        status: 'to-read',
        notes: ''
      });
    }

    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">
            {initialData ? 'Edit Book' : 'Add New Book'}
          </h3>

          {successMessage && (
            <div className="alert alert-success text-center" role="alert">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title:</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={book.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Author:</label>
              <input
                type="text"
                name="author"
                className="form-control"
                value={book.author}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Category:</label>
              <input
                type="text"
                name="category"
                className="form-control"
                value={book.category}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Status:</label>
              <select
                name="status"
                className="form-select"
                value={book.status}
                onChange={handleChange}
              >
                <option value="to-read">To Read</option>
                <option value="reading">Reading</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Notes:</label>
              <textarea
                name="notes"
                className="form-control"
                rows="4"
                value={book.notes}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                {initialData ? 'Update Book' : 'Add Book'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
