import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/home-page/HomePage";
import LoginPage from "scenes/login-page/LoginPage";
import ProfilePage from "scenes/profile-page/ProfilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
