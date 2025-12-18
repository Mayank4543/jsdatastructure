import authAPI from "../services/authService";
import { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, isError] = useState(false);
    useEffect(() => {
        const initializeAuth = () => {
            try {
                const storedUser = localStorage.getItem('user');
                const storedtoken = localStorage.getItem('token')
                if (storedUser && storedtoken) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error('Failed to load intialise Auth');
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
            

        }
      initializeAuth();

    }, []);
    const register = async (userData) => {
        try {
            setLoading(true);
            isError(null);
            const response = await authAPI.register(userData);
            
            if (response.success) {
                const { token, id, name, email, role } = response.data;
                const userInfo = { id, name, email, role };
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userInfo));
                setUser(userInfo);
                return { success: true };
            } else {
                const errorMessage = response.message || 'Registration failed';
                isError(errorMessage);
                return { success: false, error: errorMessage };
            }
        } catch (error) {
            const errorMessage = error.message || 'Registration failed';
            isError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    }
    const login = async (userData) => {
        try {
            setLoading(true);
            isError(null);
            const response = await authAPI.login(userData);
            if (response.success) {
                const { token, _id, name, email, role } = response;
                const userInfo = {
                    _id,
                    name,
                    email,
                    role
                }
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userInfo))
                setUser(userInfo);
                return { success: true }

            }
        } catch (error) {
            const errorMessage = error.message || 'Login failed';
            isError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false)
        }
    }
    const logout = async () => {
        try {
            localStorage.getItem('token');
            if (token) {
                await authAPI.logout(token)
            }
        } catch (error) {
            console.error('Logout error', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            isError(null);
        }


    }
    //  find the token od that user
    const getToken = () => {
        return localStorage.getItem('token');

    }
    //  check user is Authenticate or not
    const isAuthenticated = () => {
        return !!user && !!getToken();
    }
    const value = {
        user,
        loading,
        error,
        register,
        login,
        logout,
        getToken,
        isAuthenticated,
        isError
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
// Custom hook to use auth context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(' useAuth must be used within an AuthProvider')
    }
    return context;
}
export default AuthContext;