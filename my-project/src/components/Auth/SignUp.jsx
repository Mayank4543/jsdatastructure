import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
   
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const {register}=useAuth();
    const navigate= useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (errorMessage) setErrorMessage("")
    }
    const validationForm = () => {
         const {name , email, password,confirmPassword}=formData;
        if (!name || !email || !password) {
            setErrorMessage("Please Provide all detail");
            return false;
        }
        if (name.trim().length < 2) {
            setErrorMessage("Name must be atleast 2 character long");
            return false;
        }
        if (password.length < 6) {
            setErrorMessage('Password must be atleast 6 character long');
            return false;
        }
        if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return false;
        }


        if (!agreedToTerms) {
            setErrorMessage("Please agree to the Terms and Conditions");
            return false;
        }

        return true;
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setErrorMessage("");
        
        if (!validationForm()) {
            return;
        }
        
        setIsSubmitting(true);
        try {
            const {confirmPassword, ...userData}=formData;
            const result = await register(userData);
            if(result.success){
                navigate('/');
            }else{
                setErrorMessage(result.error || "Registration failed. Please try again.");
            }
        } catch (error) {
            setErrorMessage("An unexpected error occurred. Please try again.");
        }finally{
            setIsSubmitting(false);
        }

    }

  

    return (
        <div className="min-h-screen bg-linear-to-br from-orange-100 via-orange-50 to-white flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">

                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Create Account</h2>
                    <p className="text-gray-600">Join us and start your learning journey</p>
                </div>

                {/* Error Message */}
                {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {errorMessage}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password (min 6 characters)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                            disabled={isSubmitting}
                            minLength={6}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="w-4 h-4 mt-1 accent-blue-500"
                            required
                            disabled={isSubmitting}
                        />
                        <label className="text-sm text-gray-600">
                            I agree to the{" "}
                            <Link to="/terms" className="text-blue-500 hover:text-blue-600 font-medium">
                                Terms and Conditions
                            </Link>
                            {" "}and{" "}
                            <Link to="/privacy" className="text-blue-500 hover:text-blue-600 font-medium">
                                Privacy Policy
                            </Link>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 text-white font-semibold rounded-lg transition-all duration-200 ${isSubmitting
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'
                            }`}
                    >
                        {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;