# ShelfLog 📚

**ShelfLog** is a fullstack web application that helps users manage their personal book collections. It includes a modern frontend for interaction and a powerful backend API for storing and managing data.

---

## ✨ Features

- 📚 Add, view, edit, and manage books
- 🧾 User-friendly UI for book tracking
- 🗄️ Backend API with MongoDB for persistent storage
- 🚀 Backend deployed on Render for reliable hosting
- 🌐 Frontend deployed on netlify for fast and scalable hosting

---

## 🛠️ Tech Stack

### Frontend
- **HTML**, **CSS**, **JavaScript**
- **React.js**
- **Axios** for API requests
- **netlify** for frontend hosting

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **dotenv** for environment variables
- **CORS** middleware
- **Render** for backend hosting

---

## 📦 Installation

### Clone the Repository
```bash
git clone https://github.com/restricted12/shelflog.git
cd shelflog
```

### Backend Setup
1. **Install Backend Dependencies**:
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory:
     ```
     MONGO_URL=mongodb+srv://ezepayooner:32354505@cluster0.dwv8uae.mongodb.net/shelflog?retryWrites=true&w=majority
     PORT=8452
     ```
   - Replace `MONGO_URL` with your MongoDB Atlas connection string.

3. **Run the Backend Locally**:
   ```bash
   node api/index.js
   ```
   - The server will start at `http://localhost:8452`.
   - Test the root endpoint: `curl http://localhost:8452/` (Expected: `📚 ShelfLog API is up and running!`).

### Frontend Setup
1. **Navigate to the Frontend Directory**:
   ```bash
   cd frontend
   ```

2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Axios**:
   - Update `frontend/src/api/axios.js` to point to your backend:
     ```javascript
     import axios from 'axios';

     const instance = axios.create({
       baseURL: 'http://localhost:8452', // Update to Render URL after deployment
     });

     export default instance;
     ```

4. **Run the Frontend Locally**:
   ```bash
   npm start
   ```
   - The app will start at `http://localhost:5173` (default React port).

---


## 🚀 Usage
1. **Access the App**:
   - Open the frontend URL (e.g., `https://testbooklog.netlify.app`).
   - Navigate to the edit page for a book (e.g., `/edit/<book-id>`).

2. **Manage Books**:
   - Add a new book via the UI.
   - Edit existing books using the form (update title, author, category, status, notes).
   - View your book collection.

3. **API Endpoints**:
   - `GET /api/:id` - Fetch a book by ID.
   - `PUT /api/:id` - Update a book by ID.

---


## 🤝 Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

---

## 📜 License
This project is licensed under Ezedin
