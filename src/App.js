import React from 'react';
import Navbar from './components/navbar';
import Aboutme from './components/aboutme';
import Projects from './components/projects';
import Resume from './components/resume';
import ContactForm from './components/contact-form';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Aboutme />
      <Projects />
      <Resume />
      <ContactForm />
    </div>
  );
}

export default App;
