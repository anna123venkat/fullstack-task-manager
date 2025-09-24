# Task Manager

A full-stack task management application built with Next.js and Node.js.

## Features

- User authentication (register/login)
- Task management (create, read, update, delete)
- Dashboard with task statistics
- Responsive design

## Tech Stack

**Frontend:**

- Next.js 14
- TypeScript
- TailwindCSS
- Axios

**Backend:**

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Installation

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string
npm run dev
```

### Frontend Setup

```bash
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
npm run dev
```

## Environment Variables

**Backend (.env):**

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

**Frontend (.env.local):**

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Tasks

- `GET /api/tasks` - Get user tasks
- `POST /api/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats` - Get task statistics

## Project Structure

```
task-manager/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   └── server.js
├── pages/
│   ├── index.tsx
│   ├── login.tsx
│   ├── register.tsx
│   └── dashboard.tsx
└── src/
    ├── context/
    ├── types/
    ├── utils/
    └── styles/
```

## UML Class Diagram

```
+---------------------------+
|           User            |
+---------------------------+
| - _id: ObjectId           |
| - name: string            |
| - email: string           |
| - password: string        |
| - role: string            |
| - createdAt: Date         |
+---------------------------+
| + comparePassword()       |
| + save()                  |
| + findByEmail()           |
+---------------------------+
              |
              | 1
              |
              | owns
              |
              ▼ *
+---------------------------+
|           Task            |
+---------------------------+
| - _id: ObjectId           |
| - title: string           |
| - description: string     |
| - status: string          |
| - priority: string        |
| - dueDate: Date           |
| - userId: ObjectId (FK)   |
| - createdAt: Date         |
+---------------------------+
| + save()                  |
| + findByUserId()          |
| + updateStatus()          |
+---------------------------+

+---------------------------+
|      User Interface       |
+---------------------------+
| - HomePage                |
| - LoginPage               |
| - RegisterPage            |
| - DashboardPage           |
+---------------------------+
| + render()                |
| + useState()              |
| + useRouter()             |
| + handleSubmit()          |
+---------------------------+
              |
              | uses
              ▼
+---------------------------+
|      App Component        |
+---------------------------+
| - Component               |
| - pageProps               |
+---------------------------+
| + render()                |
+---------------------------+
              |
              | provides
              ▼
+---------------------------+
|      AuthContext          |
+---------------------------+
| - user: User              |
| - loading: boolean        |
+---------------------------+
| + login()                 |
| + register()              |
| + logout()                |
+---------------------------+
              |
              | uses
              ▼
+---------------------------+
|        AuthAPI            |
+---------------------------+
| + register()              |
| + login()                 |
| + getMe()                 |
+---------------------------+
              |
              | calls
              ▼
+---------------------------+
|      AuthRoutes           |
+---------------------------+
| + POST /register          |
| + POST /login             |
| + GET /me                 |
+---------------------------+

+---------------------------+
|        TaskAPI            |
+---------------------------+
| + getTasks()              |
| + createTask()            |
| + updateTask()            |
| + deleteTask()            |
| + getStats()              |
+---------------------------+
              |
              | calls
              ▼
+---------------------------+
|      TaskRoutes           |
+---------------------------+
| + GET /                   |
| + POST /                  |
| + PUT /:id                |
| + DELETE /:id             |
| + GET /stats              |
+---------------------------+
```

## Usage

1. Start backend server on port 5000
2. Start frontend server on port 3000
3. Navigate to http://localhost:3000
4. Register a new account
5. Login and manage tasks on the dashboard

## Output

### Home Page

- Clean landing page with "Task Manager" title
- "Sign In" and "Sign Up" navigation buttons
- Responsive design for all screen sizes

### Registration Page

- User-friendly registration form
- Form validation (name, email, password requirements)
- Automatic redirect to dashboard after successful registration

### Dashboard

- Personalized welcome message with user's name
- Task statistics cards showing:
  - Total Tasks
  - Completed Tasks
  - Pending Tasks
- "Add New Task" form with real-time updates
- Task list with:
  - Checkbox to mark tasks complete/incomplete
  - Task titles with creation dates
  - Priority indicators (low/medium/high)
  - Delete functionality
- Logout button

### API Responses

- RESTful API endpoints returning JSON
- Proper HTTP status codes (200, 201, 400, 401, 404, 500)
- Structured error messages for debugging
- JWT tokens for secure authentication

### Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Input validation

## Author

Built by Mr Prasanna Venkatesh S
