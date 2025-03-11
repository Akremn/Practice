import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import blogsData from "./data/blogs.json";
import "./App.css"; // Додаємо файл стилів

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    let filteredBlogs = blogsData;

    if (searchTerm) {
      filteredBlogs = filteredBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortType === "recent") {
      filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortType === "alphabetical") {
      filteredBlogs.sort((a, b) => a.title.localeCompare(b.title));
    }

    setBlogs(filteredBlogs);
  }, [searchTerm, sortType]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="container">
      <h1>Блог</h1>
      <input
        type="text"
        placeholder="Пошук за назвою..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <select onChange={(e) => setSortType(e.target.value)} className="sort-select">
        <option value="recent">За датою</option>
        <option value="alphabetical">За алфавітом</option>
      </select>
      <button className="filter-button">
        <Link to="/filter" className="filter-link">Фільтр за категоріями</Link>
      </button>
      <div className="blog-list">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h2><Link to={`/blog/${blog.id}`} className="no-underline">{blog.title}</Link></h2>
            <p>{blog.category} | {new Date(blog.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const CategoryFilter = () => {
  const [category, setCategory] = useState("All");
  const [blogs, setBlogs] = useState(blogsData);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    let filteredBlogs = blogsData;
    if (category !== "All") {
      filteredBlogs = blogsData.filter((blog) => blog.category === category);
    }
    setBlogs(filteredBlogs);
  }, [category]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="container">
      <h1>Фільтр за категоріями</h1>
      <select onChange={(e) => setCategory(e.target.value)} className="category-select">
        <option value="All">Усі категорії</option>
        <option value="Design">Дизайн</option>
        <option value="Product">Продукт</option>
        <option value="Software Engineering">Розробка</option>
        <option value="Customer Success">Клієнтський успіх</option>
      </select>
      <div className="blog-list">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h2><Link to={`/blog/${blog.id}`} className="no-underline">{blog.title}</Link></h2>
            <p>{blog.category} | {new Date(blog.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
      <Link to="/" className="back-link">Назад</Link>
    </div>
  );
};

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Пост не знайдено</h2>;
  }

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <p>{blog.category} | {new Date(blog.date).toLocaleDateString()}</p>
      <p>{blog.content}</p>
      <Link to="/" className="back-link">Назад до списку</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/filter" element={<CategoryFilter />} />
      </Routes>
    </Router>
  );
};

export default App;
