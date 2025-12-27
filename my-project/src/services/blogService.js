const API_URL = 'http://localhost:8080/api/blogs';

// Get token from localStorage
const getAuthToken = () => {
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        return userData.token;
    }
    return null;
};

// Get all blogs
export const getAllBlogs = async (filters = {}) => {
    try {
        const queryParams = new URLSearchParams();
        
        if (filters.category && filters.category !== 'All') {
            queryParams.append('category', filters.category);
        }
        if (filters.search) {
            queryParams.append('search', filters.search);
        }
        if (filters.tags) {
            queryParams.append('tags', filters.tags);
        }
        if (filters.sort) {
            queryParams.append('sort', filters.sort);
        }
        if (filters.page) {
            queryParams.append('page', filters.page);
        }
        if (filters.limit) {
            queryParams.append('limit', filters.limit);
        }

        const response = await fetch(`${API_URL}?${queryParams}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch blogs');
        }

        return data;
    } catch (error) {
        console.error('Get all blogs error:', error);
        throw error;
    }
};

// Get single blog by ID
export const getBlogById = async (blogId) => {
    try {
        const response = await fetch(`${API_URL}/${blogId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch blog');
        }

        return data;
    } catch (error) {
        console.error('Get blog by ID error:', error);
        throw error;
    }
};

// Create new blog
export const createBlog = async (blogData) => {
    try {
        const token = getAuthToken();
        
        if (!token) {
            throw new Error('Authentication required');
        }

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(blogData)
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to create blog');
        }

        return data;
    } catch (error) {
        console.error('Create blog error:', error);
        throw error;
    }
};

// Update blog
export const updateBlog = async (blogId, blogData) => {
    try {
        const token = getAuthToken();
        
        if (!token) {
            throw new Error('Authentication required');
        }

        const response = await fetch(`${API_URL}/${blogId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(blogData)
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to update blog');
        }

        return data;
    } catch (error) {
        console.error('Update blog error:', error);
        throw error;
    }
};

// Delete blog
export const deleteBlog = async (blogId) => {
    try {
        const token = getAuthToken();
        
        if (!token) {
            throw new Error('Authentication required');
        }

        const response = await fetch(`${API_URL}/${blogId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to delete blog');
        }

        return data;
    } catch (error) {
        console.error('Delete blog error:', error);
        throw error;
    }
};

// Like/Unlike blog
export const likeBlog = async (blogId) => {
    try {
        const token = getAuthToken();
        
        if (!token) {
            throw new Error('Authentication required');
        }

        const response = await fetch(`${API_URL}/${blogId}/like`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to like blog');
        }

        return data;
    } catch (error) {
        console.error('Like blog error:', error);
        throw error;
    }
};

// Get user's blogs
export const getUserBlogs = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/user/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch user blogs');
        }

        return data;
    } catch (error) {
        console.error('Get user blogs error:', error);
        throw error;
    }
};

// Get my blogs
export const getMyBlogs = async () => {
    try {
        const token = getAuthToken();
        
        if (!token) {
            throw new Error('Authentication required');
        }

        const response = await fetch(`${API_URL}/my/blogs`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch your blogs');
        }

        return data;
    } catch (error) {
        console.error('Get my blogs error:', error);
        throw error;
    }
};
