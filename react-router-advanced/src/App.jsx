import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* المسار المحمي */}
      <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      
      {/* المسار الديناميكي */}
      <Route path="/blog/:id" element={<BlogPost />} />
      
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
