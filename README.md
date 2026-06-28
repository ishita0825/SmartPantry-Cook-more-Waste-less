# 🥫 Smart Pantry – Cook More, Waste Less

Smart Pantry is a full-stack web application that helps users manage pantry items efficiently and reduce food waste. Users can track available ingredients, receive AI-powered recipe suggestions, and manage their pantry through an intuitive dashboard.

---

## 🚀 Features

- 📦 Manage pantry inventory
- ➕ Add new pantry items
- ✏️ Update existing pantry items
- ❌ Delete pantry items
- 🤖 AI-powered recipe suggestions based on available ingredients
- 🌙 Light/Dark mode
- 📱 Responsive user interface
- 🔗 Frontend connected to Express.js REST API

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- CSS

### Backend
- Node.js
- Express.js
- CORS
- dotenv

---

## 📂 Project Structure

```
SmartPantry-Cook-more-Waste-less/
│
├── backend/
│   ├── routes/
│   ├── server.js
│   ├── data.js
│   ├── package.json
│   └── .env.example
│
├── src/
├── public/
├── package.json
└── README.md
```

---

# Frontend Setup

### 1. Clone the repository

```bash
git clone https://github.com/ishita0825/SmartPantry-Cook-more-Waste-less.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend will run at:

```
http://localhost:5173
```

---

# Backend Setup (How to Run Backend Locally)

### Navigate to the backend folder

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

Create a file named `.env` inside the `backend` folder.

Example:

```env
PORT=5000
```

### Start the backend

```bash
npm start
```

or (if using nodemon)

```bash
npm run dev
```

The backend will run at:

```
http://localhost:5000
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=5000
```

A sample configuration is provided in:

```
backend/.env.example
```

---

# REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/items` | Get all pantry items |
| GET | `/api/items/:id` | Get a pantry item by ID |
| POST | `/api/items` | Add a new pantry item |
| PUT | `/api/items/:id` | Update a pantry item |
| DELETE | `/api/items/:id` | Delete a pantry item |
| GET | `/api/recipes` | Get AI recipe suggestions |

---

## Testing the API

The REST API was tested using Postman/Thunder Client.

The exported API collection is included in the Week 4 submission.

---

## HTTP Status Codes

The backend returns appropriate HTTP status codes, including:

- **200** – Success
- **201** – Resource Created
- **400** – Bad Request
- **404** – Resource Not Found
- **500** – Internal Server Error

---

## Screenshots

The frontend successfully communicates with the backend through REST API calls.

Screenshots demonstrating the application and successful API requests are included in:

```
W4_FrontendBackendConnection_230221084.pdf
```

---

## Future Enhancements

- Database integration (MongoDB)
- User authentication
- User-specific pantry management
- Expiry date reminders
- Shopping list generation
- AI meal planning

---

## Author

**Ishita Singh**

GitHub:
https://github.com/ishita0825
