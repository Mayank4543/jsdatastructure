import Blog from "../models/Blog.js";

// @desc    Create new blog
// @route   POST /api/blogs
// @access  Private
export const createBlog = async (req, res) => {
    try {
        const { title, description, content, category, tags, imageUrl } = req.body;

        // Validation
        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Title and content are required"
            });
        }

        if (title.trim().length < 10) {
            return res.status(400).json({
                success: false,
                message: "Title must be at least 10 characters long"
            });
        }

        if (content.trim().length < 100) {
            return res.status(400).json({
                success: false,
                message: "Content must be at least 100 characters long"
            });
        }

        // Create blog
        const blog = await Blog.create({
            title,
            description,
            content,
            category,
            tags: Array.isArray(tags) ? tags : [],
            imageUrl,
            author: req.user._id
        });

        // Populate author details
        await blog.populate('author', 'name email');

        return res.status(201).json({
            success: true,
            message: "Blog created successfully",
            data: blog
        });

    } catch (error) {
        console.error('Create blog error:', error);
        return res.status(500).json({
            success: false,
            message: "Server error during blog creation",
            error: error.message
        });
    }
};

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
export const getAllBlogs = async (req, res) => {
    try {
        const { category, search, tags, sort, page = 1, limit = 10 } = req.query;

        // Build query
        let query = { status: 'published' };

        if (category && category !== 'All') {
            query.category = category;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } }
            ];
        }

        if (tags) {
            const tagsArray = tags.split(',').map(tag => tag.trim());
            query.tags = { $in: tagsArray };
        }

        // Sort options
        let sortOption = { createdAt: -1 }; // Default: newest first
        if (sort === 'oldest') {
            sortOption = { createdAt: 1 };
        } else if (sort === 'popular') {
            sortOption = { views: -1 };
        } else if (sort === 'likes') {
            sortOption = { likes: -1 };
        }

        // Pagination
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        const skip = (pageNum - 1) * limitNum;

        // Execute query
        const blogs = await Blog.find(query)
            .populate('author', 'name email')
            .sort(sortOption)
            .skip(skip)
            .limit(limitNum)
            .lean();

        // Get total count for pagination
        const total = await Blog.countDocuments(query);

        return res.status(200).json({
            success: true,
            data: blogs,
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                totalPages: Math.ceil(total / limitNum)
            }
        });

    } catch (error) {
        console.error('Get all blogs error:', error);
        return res.status(500).json({
            success: false,
            message: "Server error while fetching blogs",
            error: error.message
        });
    }
};

// @desc    Get single blog by ID
// @route   GET /api/blogs/:id
// @access  Public
export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
            .populate('author', 'name email role');

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        // Increment views
        blog.views += 1;
        await blog.save();

        return res.status(200).json({
            success: true,
            data: blog
        });

    } catch (error) {
        console.error('Get blog by ID error:', error);
        
        // Handle invalid ObjectId
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Server error while fetching blog",
            error: error.message
        });
    }
};

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private (Author only)
export const updateBlog = async (req, res) => {
    try {
        let blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        // Check if user is the author or admin
        if (blog.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: "Not authorized to update this blog"
            });
        }

        const { title, description, content, category, tags, imageUrl, status } = req.body;

        // Update blog
        blog = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                content,
                category,
                tags: Array.isArray(tags) ? tags : blog.tags,
                imageUrl,
                status
            },
            {
                new: true,
                runValidators: true
            }
        ).populate('author', 'name email');

        return res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            data: blog
        });

    } catch (error) {
        console.error('Update blog error:', error);
        
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Server error while updating blog",
            error: error.message
        });
    }
};

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private (Author only)
export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        // Check if user is the author or admin
        if (blog.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: "Not authorized to delete this blog"
            });
        }

        await Blog.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        });

    } catch (error) {
        console.error('Delete blog error:', error);
        
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Server error while deleting blog",
            error: error.message
        });
    }
};

// @desc    Like/Unlike blog
// @route   PUT /api/blogs/:id/like
// @access  Private
export const likeBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        const userId = req.user._id;
        const likeIndex = blog.likes.indexOf(userId);

        if (likeIndex === -1) {
            // Like the blog
            blog.likes.push(userId);
        } else {
            // Unlike the blog
            blog.likes.splice(likeIndex, 1);
        }

        await blog.save();

        return res.status(200).json({
            success: true,
            message: likeIndex === -1 ? "Blog liked" : "Blog unliked",
            data: {
                likes: blog.likes.length,
                isLiked: likeIndex === -1
            }
        });

    } catch (error) {
        console.error('Like blog error:', error);
        
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Server error while liking blog",
            error: error.message
        });
    }
};

// @desc    Get user's blogs
// @route   GET /api/blogs/user/:userId
// @access  Public
export const getUserBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ 
            author: req.params.userId,
            status: 'published'
        })
            .populate('author', 'name email')
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: blogs,
            count: blogs.length
        });

    } catch (error) {
        console.error('Get user blogs error:', error);
        return res.status(500).json({
            success: false,
            message: "Server error while fetching user blogs",
            error: error.message
        });
    }
};

// @desc    Get my blogs (current user)
// @route   GET /api/blogs/my-blogs
// @access  Private
export const getMyBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ author: req.user._id })
            .populate('author', 'name email')
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            data: blogs,
            count: blogs.length
        });

    } catch (error) {
        console.error('Get my blogs error:', error);
        return res.status(500).json({
            success: false,
            message: "Server error while fetching your blogs",
            error: error.message
        });
    }
};
