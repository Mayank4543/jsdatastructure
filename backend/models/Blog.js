import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
            trim: true,
            minlength: [10, 'Title must be at least 10 characters long'],
            maxlength: [200, 'Title cannot exceed 200 characters']
        },
        description: {
            type: String,
            trim: true,
            maxlength: [200, 'Description cannot exceed 200 characters']
        },
        content: {
            type: String,
            required: [true, 'Please provide content'],
            minlength: [100, 'Content must be at least 100 characters long']
        },
        category: {
            type: String,
            enum: ['Technology', 'Programming', 'Web Development', 'Mobile Development', 'Data Science', 'AI & Machine Learning', 'DevOps', 'Design', 'Other'],
            default: 'Other'
        },
        tags: [{
            type: String,
            trim: true
        }],
        imageUrl: {
            type: String,
            trim: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Blog must have an author']
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        views: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            enum: ['draft', 'published'],
            default: 'published'
        }
    },
    {
        timestamps: true
    }
);

// Index for better search performance
BlogSchema.index({ title: 'text', description: 'text', content: 'text' });
BlogSchema.index({ category: 1 });
BlogSchema.index({ tags: 1 });
BlogSchema.index({ author: 1 });
BlogSchema.index({ createdAt: -1 });

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
