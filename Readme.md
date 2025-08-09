# Product_Store 
 
A full-stack e-commerce-like application featuring a Node.js/Express backend with MongoDB integration and a Vite + React + Chakra UI frontend.

## Features

- RESTful APIs for product management using Express and MongoDB.
- Modern, responsive React frontend with client-side routing, state management, and notifications.
- Streamlined development with Vite for frontend and nodemon for backend live reloading.

## Project Structure

```
Product_Store/
├── backend/            # Node.js/Express server with MongoDB
└── frontend/           # Vite + React frontend with Chakra UI
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- MongoDB (Atlas or local instance)

### Backend Setup
1. Navigate to `backend/`:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `backend/` with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   (Uses `nodemon backend/server.js` for live reloads.)

### Frontend Setup
1. Navigate to `frontend/`:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` (or the provided Vite address) in your browser.

## Tech Stack

| Layer    | Technologies                                                  |
|----------|--------------------------------------------------------------|
| Backend  | Node.js, Express, Mongoose, dotenv                            |
| Frontend | Vite, React, Chakra UI, React Router, Zustand, React Toastify |

## API Endpoints
- `GET /api/products`: List all products.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

(Tested using Postman)

## Frontend Features
- Responsive UI built with Chakra UI and Emotion.
- Client-side routing via React Router.
- Lightweight state management with Zustand.
- User notifications using React Toastify.
- Path aliasing with `vite-tsconfig-paths` for cleaner imports.

## Future Improvements
- Implement user authentication (e.g., JWT or OAuth).
- Add input validation and enhanced error handling.
- Support product image uploads and storage.
- Containerize with Docker for easier deployment.
- Set up CI/CD pipelines for automated testing and deployment.

## Contribution
Contributions are welcome! Please:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Ensure code follows existing conventions and is well-documented.

## License
MIT License (see `LICENSE` file for details).
