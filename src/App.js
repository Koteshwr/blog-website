import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Note the addition of "Routes"
import './App.css';
import NavBar from './components/NavBar';
import BlogMainPage from './components/BlogMainPage';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp'
import BlogCreatePost from './components/BlogCreatePost'
import BlogPost from './components/BlogPost'

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/* Use the "Route" components within the "Routes" component */}
            <Route exact path="/" element={<BlogMainPage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/createpost" element={<BlogCreatePost />} />
            <Route exact path="/blogpost" element={<BlogPost/>}/>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
