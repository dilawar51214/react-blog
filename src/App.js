// IMPORT CSS
import './App.css';
// IMPORT NAVBAR
import Nav from "./components/Nav/index";
// IMPORT ALL ARTICLES LANDING PAGE
import Articles from "./components/Articles/index";
// IMPORTING SINGLE ARTICLE PAGFE
import Article from "./components/Article/index";
// IMPORT CATEGORIES PAGE
import Category from "./components/Category/index";
// IMPORT ARTICLES OF A CATEGORY PAGE
import CategoryArticle from './components/Articles/category'
// IMPORT UTILITIES TO DEFINE ROUTES FOR DIFFERENT PAGES
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* USE NAVBAR COMPONENT */}
     <Nav/>
     {/* DEFINE ALL ROUTES IN THIS APP */}
     <Routes>
       {/* ROUTE FOR HOMEPAGE */}
        <Route path="/" element={<Articles />} exact />
        {/* ROUTE FOR SINGLE ARTICLE PAGE */}
        <Route path="/article/:slug" element={<Article />} exact />
        {/* ROUTE FOR ALL CATEGORIES PAGE */}
        <Route path="/category" element={<Category />} exact />
        {/* ROUTE FOR SINGLE CATEGORY PAGE */}
        <Route path="/category/:slug" element={<CategoryArticle />} exact />

      </Routes>
    </div>
  );
}

export default App;
