
import bannerImage from '../assets/banner-stack.png';
const Banner = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Build Your Ideal <br />
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Development
        </span> Stack
      </h1>
      
      <p className="mt-4 text-gray-600 text-base md:text-lg max-w-lg">
        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
      </p>
      
      <div className="mt-6 flex flex-wrap items-center gap-4">
        
        <button className="px-6 py-3 text-white font-medium bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-md hover:opacity-90 transition">
          Explore Technologies
        </button>
        
       
        <button className="px-6 py-3 text-gray-700 font-medium bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition">
          Learn More
        </button>
      </div>
    </div>

    
    <div className="flex justify-center">
      
      <img src={bannerImage} alt="Development Stack" className="w-full max-w-md object-contain" />
    </div>

  </div>
    );
};

export default Banner;
