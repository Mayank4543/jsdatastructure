import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isloggedin, setIsloggedin] = useState(true);

    return (
        <nav className="bg-gray-800/80 backdrop-blur-lg shadow-lg fixed top-0 w-full px-5 py-4 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-white font-bold text-xl">My Logo</Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-white font-medium">

                    <li className="hover:text-gray-200 cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="hover:text-gray-200 cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="hover:text-gray-200 cursor-pointer"><Link to="/contact">Contact</Link></li>

                    <li>
                        <button className="px-6 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/30 transition-all">
                            {isloggedin ? "Login" : "Sign Up"}
                        </button>
                    </li>

                </ul>


                {/* Mobile Button */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? 'X' : '☰'}
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-3">
                    <ul className="flex flex-col gap-3 text-white font-medium  p-4 rounded-lg">
                        <li className="py-3 px-3 rounded-lg hover:bg-gray-600 hover:translate-x-1 transition-all duration-300"><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li className="py-3 px-3 rounded-lg hover:bg-gray-600 hover:translate-x-1 transition-all duration-300"><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
                        <li className="py-3 px-3 rounded-lg hover:bg-gray-600 hover:translate-x-1 transition-all duration-300"><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                        <button className="px-6 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/30 transition-all">
                            {isloggedin ? "Login" : "Sign Up"}
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
