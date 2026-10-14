
import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import TechnologyCard from './components/Technology/TechnologyCard';
import FooterCard from './components/Technology/FooterCard';
import type { ITechType } from './types/techtype';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [technology, setTechnology] = useState<ITechType[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnology(data);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <ToastContainer position="top-right" autoClose={3000} />
      <div>
        <Nav />
        <Banner />
        
        
        <TechnologyCard Technology={technology} />
      </div>

      <FooterCard />
    </div>
  );
}

export default App;