import { useState } from "react";
import Hero from "./Hero";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isloggedin, setIsloggedin] = useState(true);

    return (
        <nav className="bg-gray-800/80 backdrop-blur-lg shadow-lg fixed top-0 w-full px-5 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-white font-bold text-xl">My Logo</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-white font-medium">

                    <li className="hover:text-gray-200 cursor-pointer"><Hero /></li>
                    <li className="hover:text-gray-200 cursor-pointer">About</li>
                    <li className="hover:text-gray-200 cursor-pointer">Contact</li>

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
                        <li className="py-3 px-3 rounded-lg hover:bg-gray-600 hover:translate-x-1 transition-all duration-300">Home</li>
                        <li className="py-3 px-3 rounded-lg hover:bg-gray-600 hover:translate-x-1 transition-all duration-300">About</li>
                        <li className="py-3 px-3 rounded-lg hover:bg-gray-600 hover:translate-x-1 transition-all duration-300">Contact</li>
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
