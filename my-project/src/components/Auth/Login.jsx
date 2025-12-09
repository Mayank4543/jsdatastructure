import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-orange-100 via-orange-50 to-white flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
                
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-gray-600">Login to continue your learning journey</p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                        />
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <Link to="/forgot-password" className="text-blue-500 hover:text-blue-600 font-medium">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="font-medium text-gray-700">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                        <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span className="font-medium text-gray-700">Facebook</span>
                    </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-semibold">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;