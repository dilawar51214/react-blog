import './App.css';
import Nav from "./components/Nav/index";
import Articles from "./components/Articles/index";
import Article from "./components/Article/index";
import Category from "./components/Category/index";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
        <Route path="/" element={<Articles />} exact />
        <Route path="/article" element={<Article />} exact />
        <Route path="/category" element={<Category />} exact />
      </Routes>
    </div>
  );
}

export default App;
