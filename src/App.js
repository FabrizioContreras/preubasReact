import "./App.css";
import {Route, Routes } from "react-router-dom";
import Footer from "./components/public/Footer";
import Main from "./components/public/Main";
import NavBar from "./components/public/NavBar";
import Details from "./components/public/Details";
import UserForm from "./components/public/UserForm";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        {/* para llamar el element tiene que ser "{<element/>}" */}
        <Route exact path={"/"} element={<Main/>} />
        <Route path={"/details/:id"} element={Details} />
        <Route path={"/user-form"} element={UserForm} />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
