import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ThemeProvider from "./themeProvider";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="App" >
          <h1>Theme provider</h1>
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/blog" exact element={<Blog />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
