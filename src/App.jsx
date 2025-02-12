import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import Login from './pages/LoginPage.jsx';
import Register from "./pages/RegisterPage.jsx";
import DetailPage from "./pages/DetailPage";
import Profile from "./pages/ProfilePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/film/:id" element={<DetailPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;