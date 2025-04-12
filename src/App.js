import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import NotFound from "./pages/NotFound/NotFound";
import BlogDetails from "./pages/BlogDetails/BlogDetails";

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>   
        <Route path="/blogs/:id" element={<BlogDetails/>}/> 
      </Routes>
      
      <Footer/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
