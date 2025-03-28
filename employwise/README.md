# EmployWise - User Management System

A React application that integrates with the Reqres API to perform basic user management functions.

## Features

- User Authentication
- User List with Pagination
- User Search and Filtering
- User Edit and Delete Operations
- Responsive Design
- Protected Routes

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd employwise
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## API Endpoints Used

- POST /api/login - User authentication
- GET /api/users - Fetch user list
- PUT /api/users/{id} - Update user details
- DELETE /api/users/{id} - Delete user

## Technologies Used

- React
- TypeScript
- Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS

## Project Structure

```
src/
  ├── components/
  │   ├── Login.tsx
  │   ├── UserList.tsx
  │   └── EditUser.tsx
  ├── store/
  │   ├── store.ts
  │   └── slices/
  │       ├── authSlice.ts
  │       └── userSlice.ts
  ├── App.tsx
  └── main.tsx
```

## Features Implementation

### Level 1: Authentication
- Login form with email and password
- Token-based authentication
- Protected routes
- Persistent login state

### Level 2: User List
- Paginated user list
- User card display with avatar
- Lazy loading implementation
- Search and filter functionality

### Level 3: User Management
- Edit user details
- Delete user with confirmation
- Success/error notifications
- Form validation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
