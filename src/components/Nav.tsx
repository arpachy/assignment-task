
import { useState } from 'react';
import hamburger from '../assets/hamburger.png';
import logo from '../assets/logo-text.png';

const Nav = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            
                <img src={logo} className="h-8 object-contain" alt="Logo" /> 
            
              
                <ul className="hidden md:flex gap-8 items-center font-medium text-gray-700">
                    <li className="text-pink-500 cursor-pointer">Home</li>
                    <li className="hover:text-pink-500 cursor-pointer transition">Technologies</li>
                    <li className="hover:text-pink-500 cursor-pointer transition">Projects</li>
                    <li className="hover:text-pink-500 cursor-pointer transition">About</li>
                    <li className="hover:text-pink-500 cursor-pointer transition">Contact</li>
                </ul>

                <div className="hidden md:flex gap-4 items-center">
                    <button className="text-gray-700 hover:text-pink-500 font-medium">Sign In</button>
                    <button className="bg-pink-500 text-white py-2 px-5 rounded-full hover:bg-pink-600 transition">Sign Up</button>
                </div>

                
                <div className="block md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none p-1">
                        <img src={hamburger} alt="Menu" className="w-6 h-6 object-contain" />
                    </button>
                </div>
            </nav>

            
            {isOpen && (
                <div className="md:hidden bg-white border-t px-4 pt-4 pb-6 space-y-4 shadow-lg transition-all">
                    <ul className="flex flex-col space-y-3 font-medium text-gray-700">
                        <li className="text-pink-500 py-1">Home</li>
                        <li className="py-1 hover:text-pink-500">Technologies</li>
                        <li className="py-1 hover:text-pink-500">Projects</li>
                        <li className="py-1 hover:text-pink-500">About</li>
                        <li className="py-1 hover:text-pink-500">Contact</li>
                    </ul>
                    <div className="flex flex-col space-y-2 pt-2 border-t">
                        <button className="text-left py-2 text-gray-700 font-medium">Sign In</button>
                        <button className="bg-pink-500 text-white py-2 px-4 rounded-full text-center hover:bg-pink-600 transition">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Nav;