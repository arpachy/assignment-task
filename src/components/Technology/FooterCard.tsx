

const FooterCard = () => {
  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 text-sm mt-16 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          
          {/* Left Column: Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                DS
              </div>
              <span className="font-bold text-lg text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 pt-2 text-xs font-medium text-gray-600">
              <a href="#" className="hover:text-pink-500 transition">GitHub</a>
              <a href="#" className="hover:text-pink-500 transition">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition">LinkedIn</a>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-gray-900 tracking-wider uppercase">Product</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Projects</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-gray-900 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Careers</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-gray-900 tracking-wider uppercase">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCard;