import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const categories = ["All", "Technology", "Programming", "Web Development", "Mobile Development", "Data Science", "AI & Machine Learning", "DevOps", "Design"];

    // Temporary demo blogs
    const demoBlogs = [
        {
            id: 1,
            title: "Getting Started with React Hooks",
            description: "Learn how to use React Hooks to manage state and side effects in your functional components.",
            content: "React Hooks have revolutionized the way we write React components...",
            category: "Programming",
            tags: ["React", "JavaScript", "Hooks"],
            author: { name: "John Doe" },
            imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
            createdAt: "2025-12-15"
        },
        {
            id: 2,
            title: "Understanding MongoDB Aggregation",
            description: "Deep dive into MongoDB aggregation pipelines and how to use them effectively.",
            content: "MongoDB aggregation framework is a powerful tool...",
            category: "Data Science",
            tags: ["MongoDB", "Database", "NoSQL"],
            author: { name: "Jane Smith" },
            imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500",
            createdAt: "2025-12-14"
        },
        {
            id: 3,
            title: "Building RESTful APIs with Express",
            description: "A comprehensive guide to creating robust and scalable REST APIs using Express.js.",
            content: "Express.js is a minimal and flexible Node.js web application framework...",
            category: "Web Development",
            tags: ["Express", "Node.js", "API"],
            author: { name: "Mike Johnson" },
            imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500",
            createdAt: "2025-12-13"
        }
    ];

    useEffect(() => {
        // TODO: Fetch blogs from API
        setTimeout(() => {
            setBlogs(demoBlogs);
            setLoading(false);
        }, 500);
    }, []);

    const filteredBlogs = selectedCategory === "All" 
        ? blogs 
        : blogs.filter(blog => blog.category === selectedCategory);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-br from-orange-50 to-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600 font-semibold">Loading blogs...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-orange-50 to-white">
            {/* Hero Section */}
            <div className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
                        <p className="text-xl text-blue-100 mb-6">
                            Discover articles, tutorials, and insights from our community
                        </p>
                        {isAuthenticated() && (
                            <button
                                onClick={() => navigate("/create-blog")}
                                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
                            >
                                + Write a Blog
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Category Filter */}
                <div className="mb-8 flex flex-wrap gap-3">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full font-medium transition ${
                                selectedCategory === category
                                    ? 'bg-blue-500 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blogs Grid */}
                {filteredBlogs.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📝</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No blogs found</h3>
                        <p className="text-gray-600 mb-6">
                            {selectedCategory === "All" 
                                ? "Be the first to write a blog!" 
                                : `No blogs in ${selectedCategory} category yet.`}
                        </p>
                        {isAuthenticated() && (
                            <button
                                onClick={() => navigate("/create-blog")}
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                            >
                                Create Your First Blog
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map(blog => (
                            <div
                                key={blog.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Image */}
                                {blog.imageUrl && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                <div className="p-6">
                                    {/* Category Badge */}
                                    {blog.category && (
                                        <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                            {blog.category}
                                        </span>
                                    )}

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition">
                                        {blog.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {blog.description}
                                    </p>

                                    {/* Tags */}
                                    {blog.tags && blog.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {blog.tags.slice(0, 3).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                                {blog.author.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">
                                                    {blog.author.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {formatDate(blog.createdAt)}
                                                </p>
                                            </div>
                                        </div>
                                        <Link
                                            to={`/blog/${blog.id}`}
                                            className="text-blue-500 hover:text-blue-600 font-semibold text-sm"
                                        >
                                            Read more →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;