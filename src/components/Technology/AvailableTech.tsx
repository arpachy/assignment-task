import React from 'react';
import type { ITechType } from '../../types/techtype';
import { FcRating } from 'react-icons/fc';

const AvailableTech = ({ Technology, selectedStack, setSelectedStack }: 
  { Technology: ITechType[], selectedStack: ITechType[], setSelectedStack: any }) => {

    return (
        <div className= "grid grid-cols-1 lg:grid-cols-4 gap-8" >
          <AvailableTech 
  Technology={Technology} 
  selectedStack={selectedStack} 
  setSelectedStack={setSelectedStack} 
/>
 <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            Technology.map((tech: ITechType) => (
        <div className="border rounded-xl p-5 shadow-sm bg-white flex flex-col justify-between">
          <div>
           <div className="flex justify-between items-center mb-3">
              <div>
      <img
        src={tech.icon}
        alt="icon" />
      <h3 className="font-bold text-lg">{tech.name}</h3>
    </div>
       <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{tech.badge}</span>
      
      
    </div>
    <div>
      <p className="text-gray-500 text-sm mt-1">{tech.description}</p>
    </div>

      <div className="mt-4 pt-4 border-t flex items-center justify-between">
            
          <button className="btn btn-outline text-xs text-gray-500">{tech.category}</button>
            
            <span className="text-xs text-gray-500">{tech.difficulty}</span>
            <span><FcRating/> {tech.rating}</span>
          
        </div>
          <div className="mt-6">
      <button className="btn btn-primary btn-block ">Add to Stack</button>
    </div>
        
      </div>
       </div> 
              
          ))
        }
  
<div className="lg:col-span-1">
      <div className="border rounded-xl p-5 bg-white shadow-sm sticky top-6">
        <h3 className="font-bold text-gray-900">Your Stack</h3>
            {selectedStack.length === 0 ? (
        <div className="text-center py-6">
  <p className="text-xs text-gray-500 mb-4">No technologies selected yet.</p>
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-gray-400 text-sm">
          Your stack is empty.
        </div> 
        </div> ) : (
      <div>
  <p className="text-xs text-gray-500 mb-4">{selectedStack.length} Technology Selected</p>
                            
     <div className="space-y-3 mb-6">
{selectedStack.map((item) => (
  <div key={item.id} className="flex items-center justify-between p-2.5 border rounded-lg bg-gray-50">
    <div className="flex items-center gap-2">
      <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
    <div>
  <p className="text-sm font-semibold">{item.name}</p>
<span className="text-[10px] text-gray-500">{item.category}</span>
    </div>
    </div>
<button className="text-gray-400 hover:text-red-500">✕</button>
    </div>
      ))}
    </div>
<button className="w-full border border-red-200 text-red-500 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition">
     Remove All
     </button>
  </div>
)}
  </div>
  </div>
  </div>
  </div>
  );
};

export default AvailableTech;


