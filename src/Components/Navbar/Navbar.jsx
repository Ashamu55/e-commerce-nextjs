import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("userInfo");
    localStorage.removeItem("User");
    router.push("/signup");
  };

  return (
    <nav className="bg-red-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xl font-bold text-gray-100 text-xl md:text-4xl">
            MobileVault
            </a>

           
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="/"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Showcase
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Translate
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Extreme
              </a>
            </div>
          </div>

          
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-800 hover:text-blue-500 focus:outline-none"
            >

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>


          <div className="hidden lg:flex lg:items-center">
            <a onClick={handleSignOut}
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-200"
            >
               Sign Out
            </a>

          </div>
        </div>
      </div>


      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block text-gray-800 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
          >
            Showcase
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
          >
            Docs
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
          >
            Blog
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
          >
            Translate
          </a>
          <a
            href="#"
            className="block text-gray-800 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium"
          >
            Extreme
          </a>
          <a onClick={handleSignOut}
              href="#"
              className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-200"
            >
               Sign Out
            </a>
        </div>
      </div>
    </nav>
  );
}