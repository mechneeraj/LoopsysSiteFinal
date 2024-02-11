import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './About';
import Career2 from './Career2';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import './index.css';

function App() {
    return (

        <React.StrictMode basename="/App">
            <Router>
                <Nav />
                {/* <Content />
      <Portfolio />
      <Customers />
      <Team /> */}

                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path="/Career2" element={<Career2 />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default App;
