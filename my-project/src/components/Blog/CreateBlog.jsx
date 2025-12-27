import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { createBlog } from "../../services/blogService";

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
        category: "",
        tags: "",
        imageUrl: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { user } = useAuth();
    const navigate = useNavigate();

    const categories = [
        "Technology",
        "Programming",
        "Web Development",
        "Mobile Development",
        "Data Science",
        "AI & Machine Learning",
        "DevOps",
        "Design",
        "Other"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errorMessage) setErrorMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        // Validation
        if (!formData.title.trim() || !formData.content.trim()) {
            setErrorMessage("Title and content are required");
            return;
        }

        if (formData.title.trim().length < 10) {
            setErrorMessage("Title must be at least 10 characters long");
            return;
        }

        if (formData.content.trim().length < 100) {
            setErrorMessage("Content must be at least 100 characters long");
            return;
        }

        setIsSubmitting(true);

        try {
            // Process tags
            const tagsArray = formData.tags
                .split(",")
                .map(tag => tag.trim())
                .filter(tag => tag.length > 0);

            const blogData = {
                title: formData.title,
                description: formData.description,
                content: formData.content,
                category: formData.category,
                tags: tagsArray,
                imageUrl: formData.imageUrl
            };

            // API call to create blog
            const response = await createBlog(blogData);
            
            if (response.success) {
                alert("Blog created successfully!");
                navigate("/blogs");
            } else {
                setErrorMessage(response.message || "Failed to create blog");
            }

        } catch (error) {
            setErrorMessage(error.message || "Failed to create blog. Please try again.");
            console.error("Blog creation error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 to-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Create New Blog</h1>
                    <p className="text-gray-600">Share your knowledge with the community</p>
                </div>

                {/* Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {errorMessage && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Blog Title *
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter an engaging title for your blog"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                required
                                disabled={isSubmitting}
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                {formData.title.length} characters (min 10)
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Short Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Brief description of your blog (appears in preview)"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                disabled={isSubmitting}
                                maxLength={200}
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                {formData.description.length}/200 characters
                            </p>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                disabled={isSubmitting}
                            >
                                <option value="">Select a category</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Tags
                            </label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="Enter tags separated by commas (e.g., React, JavaScript, Web Dev)"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                disabled={isSubmitting}
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Separate tags with commas
                            </p>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Cover Image URL
                            </label>
                            <input
                                type="url"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleChange}
                                placeholder="https://example.com/image.jpg"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Blog Content *
                            </label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Write your blog content here... Share your insights, experiences, and knowledge."
                                rows={15}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-y"
                                required
                                disabled={isSubmitting}
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                {formData.content.length} characters (min 100)
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`flex-1 py-3 px-6 text-white font-semibold rounded-lg transition-all duration-200 ${
                                    isSubmitting
                                        ? 'bg-blue-400 cursor-not-allowed'
                                        : 'bg-blue-500 hover:bg-blue-600 hover:shadow-lg'
                                }`}
                            >
                                {isSubmitting ? 'Publishing...' : 'Publish Blog'}
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/blogs")}
                                disabled={isSubmitting}
                                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;
