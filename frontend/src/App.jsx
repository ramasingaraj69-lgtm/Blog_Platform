import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BlogDetails from "./pages/BlogDetails";
import Profile from "./pages/Profile";
import Bookmarks from "./pages/Bookmarks";
import CreateBlog from "./pages/CreateBlog";
import NotFound from "./pages/NotFound";
import EditBlog from "./pages/EditBlog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/profile/" element={<Profile />} />

        <Route path="/bookmarks" element={<Bookmarks />} />

        <Route path="/create-blog" element={<CreateBlog />} />
<Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route
  path="/edit-blog/:id"
  element={<EditBlog />}
/>

      </Routes>
    </BrowserRouter>

    <ToastContainer position="top-right" autoClose={1500} />
    
    </>
  );
}

export default App;