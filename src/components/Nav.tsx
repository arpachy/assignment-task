import hamburger from '../assets/hamburger.png';
import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <section>
            
            <nav className="bg-white-100 pt-4">
                <div className="container mx-auto flex justify-between h-auto">
                    <img src={logo} className="logo" alt=" " /> 
                
                <ul className="hidden md:flex gap-4 items-center">
                    <li className="text-pink-500">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <ul className="hidden md:flex gap-4 items-center">
                    <li>Sign In</li>
                    <button className="bg-pink-500 text-white py-2 px-4 rounded-full">Sign Up</button>
                </ul>
                <span className="block md:hidden text-right">
                    <img src={hamburger} alt="" />
                </span>
                </div>
            </nav>
        </section>
    );
};

export default Nav;