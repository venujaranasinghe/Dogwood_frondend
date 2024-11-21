import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Product from './pages/product';
import Orders from './pages/orders';
import Users from './pages/users';
import UserNew from './pages/userNew';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userNew" element={<UserNew />} />
      </Routes>
  </Router>
  );
}

export default App;
