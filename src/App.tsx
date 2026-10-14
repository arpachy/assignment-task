import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Nav from './components/Nav';
import TechnologyCard from './components/Technology/TechnologyCard';
import FooterCard from './components/Technology/FooterCard';
import type { ITechType } from './types/techtype';

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