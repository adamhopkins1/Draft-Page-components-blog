import './index.css';
import './SCSS/footer.css';
import React from 'react';
import Nav from './components/Nav';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;