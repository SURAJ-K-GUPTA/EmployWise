# 🚀 User Management System (React + Redux)

A full-stack **User Management System** built with **React, Redux Toolkit, TypeScript, and TailwindCSS**.  
It includes **authentication, user management, and modals for deleting users**.

---

## 🛠️ **Tech Stack**
- **Frontend**: React, Redux Toolkit, TypeScript, TailwindCSS
- **State Management**: Redux Toolkit
- **API**: [ReqRes API](https://reqres.in/) (for authentication & user data)

---

## 📌 **Features**
✔️ User Authentication (Login / Logout)  
✔️ JWT-based authentication using Redux  
✔️ User List Display  
✔️ Delete Confirmation Modal  
✔️ Error Handling for Bad Requests  

---

## 🚀 **Getting Started**

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/SURAJ-K-GUPTA/EmployWise.git
cd employwise
```

### 2️⃣ Install Dependencies
```sh
npm install
# or
yarn install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
# or
yarn dev
```

---

## 📂 **Project Structure**
```
📂 src
 ┣ 📂 components       # UI Components (Modals, Forms, etc.)
 ┣ 📂 store            # Redux slices & store configuration
 ┃ ┣ 📜 authSlice.ts   # Authentication slice
 ┃ ┣ 📜 userSlice.ts   # User management slice
 ┣ 📂 utils            # Utility functions
 ┣ 📜 App.tsx          # Main App component
 ┣ 📜 main.tsx         # React entry point
 ┗ 📜 index.css        # Global styles
```

---

## 🔑 **Authentication Flow**
1. User enters credentials on the **Login Page**.
2. Credentials are sent to `https://reqres.in/api/login`.
3. If valid, a **JWT token** is stored in `localStorage` and Redux state.
4. The user is redirected to the **User List Page**.
5. If the token is invalid, an error message is shown.

---

## ⚡ **Redux Store**
### **🔹 `authSlice.ts`**
- Handles **login/logout actions**.
- Stores **token & authentication state**.

### **🔹 `userSlice.ts`**
- Manages **fetching, deleting users**.
- Stores **user data & error handling**.

---

## 📜 **API Endpoints**
| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| POST   | `/api/login`           | User Login           |
| GET    | `/api/users`           | Fetch Users          |
| PUT    | ` /api/users/:id ` | Update user  |
| DELETE | `/api/users/:id`       | Delete User          |

---


## 🎉 **Contributing**
Feel free to fork and submit pull requests! 🚀

---

## 📄 **License**
This project is open-source and available under the **MIT License**.
