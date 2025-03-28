import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Layout from './components/Layout';
import Login from './components/Login';
import UserList from './components/UserList';
import EditUser from './components/EditUser';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UserList />
                </PrivateRoute>
              }
            />
            <Route
              path="/users/:id/edit"
              element={
                <PrivateRoute>
                  <EditUser />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/users" />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
