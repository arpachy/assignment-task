import React, { use, useState } from 'react';
import type { ITechType } from '../../types/techtype';
import AvailableTech from './AvailableTech';

interface TechnologyCardProps {
  Technology: ITechType[]; 
}

const TechnologyCard = ({ Technology }: TechnologyCardProps) => {
  
  const [selectedStack, setSelectedStack] = useState<ITechType[]>([]);

  


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Explore the <span className="text-pink-500">Technologies</span>
        </h1>
        <p className="text-gray-600">Pick one technology per category to build your ideal stack.</p>
      </div>

      <AvailableTech 
        Technology={Technology} 
        selectedStack={selectedStack} 
        setSelectedStack={setSelectedStack} 
      />
    </div>
  );
};
export default TechnologyCard;