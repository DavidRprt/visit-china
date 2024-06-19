const Footer = () => {
  return (
    <footer className="bg-[#2F4858] text-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Visit China</h2>
            <p className="text-sm">Explore the beauty of China</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="text-slate-400 hover:text-slate-300">
              About Us
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-300">
              Contact
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-300">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-slate-400">
          &copy; 2024 Visit China. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
