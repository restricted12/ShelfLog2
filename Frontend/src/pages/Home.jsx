import React, { useContext, useState } from 'react';
import { BookContext } from '../store/BookContext';

const capitalize = (str) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1).replace('-', ' ') : '';

const HomePage = () => {
  const {
    books,
    filterStatus,
    setFilterStatus,
    filterCategory,
    setFilterCategory,
    loading,
    error,
    deleteBook,
  } = useContext(BookContext);

  const [showFilter, setShowFilter] = useState(false);

  const editBook = (id) => {
    alert(`Edit book with id: ${id}`);
  };

  const viewBook = (id) => {
    alert(`View book with id: ${id}`);
  };

  const statuses = ['', 'to-read', 'reading', 'completed'];
  const categories = ['', 'Fiction', 'Science', 'History', 'Biography', 'General'];

  const clearFilters = () => {
    setFilterStatus('');
    setFilterCategory('');
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">My Book Shelf</h1>

      {/* Hamburger button for mobile */}
      <div className="d-md-none mb-3 text-end">
        <button
          className="btn btn-outline-primary"
          onClick={() => setShowFilter(true)}
        >
          <i className="bi bi-filter-left me-2"></i> Filters
        </button>
      </div>

      {/* Filter Offcanvas for small screens */}
      <div
        className={`offcanvas offcanvas-start ${showFilter ? 'show' : ''}`}
        tabIndex="-1"
        style={{ visibility: showFilter ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Filter Books</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowFilter(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="mb-3">
            <label className="form-label">Filter by Status</label>
            <select
              className="form-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              {statuses.slice(1).map((status) => (
                <option key={status} value={status}>
                  {capitalize(status)}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Filter by Category</label>
            <select
              className="form-select"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.slice(1).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-secondary w-100" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      {/* Filters visible on medium and larger screens */}
      <div className="d-none d-md-flex row mb-4 align-items-end">
        <div className="col-md-4">
          <label className="form-label">Filter by Status</label>
          <select
            className="form-select"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            {statuses.slice(1).map((status) => (
              <option key={status} value={status}>
                {capitalize(status)}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Filter by Category</label>
          <select
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.slice(1).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <button className="btn btn-secondary w-100" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>

      {/* Loading & Error */}
      {loading && <p className="text-center">Loading books...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Book Cards */}
      {!loading && !error && (
        <>
          {books.length === 0 ? (
            <p className="text-center fs-4">No books found. Please add some books!</p>
          ) : (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {books.map((book) => (
                <div key={book._id} className="col">
                  <div className="card h-100 shadow">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{book.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        by {book.author}
                      </h6>
                      <p className="card-text">
                        <strong>Category:</strong> {book.category}
                      </p>
                      <p className="card-text">
                        <strong>Status:</strong> {capitalize(book.status)}
                      </p>
                      <div className="mt-auto d-flex gap-2">
                        <button
                          className="btn btn-info text-white"
                          onClick={() => viewBook(book._id)}
                        >
                          <i className="bi bi-eye-fill me-1"></i> View
                        </button>
                        <button
                          className="btn btn-warning"
                          onClick={() => editBook(book._id)}
                        >
                          <i className="bi bi-pencil-square me-1"></i> Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteBook(book._id)}
                        >
                          <i className="bi bi-trash me-1"></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
