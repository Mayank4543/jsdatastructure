import { Link } from "react-router-dom";

const Footer = () => {
    return (
       
        <footer className="bg-gray-800 text-white py-10 px-4 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  ">
                <div>
                    <h2 className="text-xl font-bold mb-4">About </h2>
                    <p className="text-gray-400">We provide quality courses to help you enhance your skills and achieve your career goals.</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li ><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                        <li><Link to="/" className="text-gray-400 hover:text-white transition">About</Link></li>
                        <li><Link to="/" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact Info</h2>
                    <ul className="text-gray-400 space-y-2">
                        <li>Email: info@learningplatform.com</li>
                        <li>Phone: +1 234 567 8900</li>
                        <li>Address: 123 Learning St, Education City</li>
                    </ul>
                </div>

            </div>
              <div className="border-t border-gray-700 text-center text-gray-500 mt-8 pt-7
               ">
               <p >&copy; 2025 Learning Platform. All rights reserved.</p>
              </div>
        </footer>
    );
};

export default Footer;
