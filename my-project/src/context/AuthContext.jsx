import authAPI from "../services/authService";
const { createContext, useContext, useState, useEffect } = require("react");
const AuthContext=createContext(null);
export const AuthProvider=({childern})=>{
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(null);
    const [error,isError]=useState(false);
    useEffect(()=>{
         const initializeAuth=()=>{
            try {
                const storedUser=localStorage.getItem('user');
                const storedtoken=localStorage.getItem('token')
                if(storedUser && storedtoken){
                setUser(JSON.parse(storedUser));
                }
            } catch (error) {
              console.error('Failed to load intialise Auth');
              localStorage.removeItem('user');
              localStorage.removeItem('token');
            }finally
            {
                setLoading(false);
            }
            initializeAuth();

         }
         

    },[]);
    const register=async(userData)=>{
     try {
         setLoading(true);
         isError(null)
        if(resposne.success){ 
            const resposne= await authAPI.register(userData);
            const {token,...userInfo}=resposne.body;
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(userInfo))
           setUser(userInfo);
           return {success:true}
        }
     } catch (error) {
        const errorMessage= error.errorMessage || 'Registration failed';
        isError(errorMessage);
        return { success: false, error: errorMessage };
     }finally{
        setLoading(false)
     }

    }
    const login=async(userData)=>{
        try {
            setLoading(true);
            isError(null);
            const response = authAPI.login(userData);
         if(response.success){
            const{token,_id,name ,email, role}= response;
            const userInfo={
                _id,
                name,
                email, 
                role
            }
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(userInfo))
            setUser(userInfo);
            return {success:true}
            
         }
        } catch (error) {
            const errorMessage=error.message ||'Login failed';
            isError(errorMessage);
            return { success: false, error: errorMessage };
       }finally{
        setLoading(false)
       }
    }
    const logout=async ()=>{
        try {
            localStorage.getItem('token');
            if(token){
                await authAPI.logout(token)
            }
        } catch (error) {
            console,error('Logout error',error);
        }finally{
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            isError(null);
        }


    }
    //  find the token od that user
    const getToken=()=>{
        return localStorage.getItem('token');

    }
    //  check user is Authenticate or not
    const isAuthenticated=()=>{
        return !!user && !!getToken();
    }
    const value={
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
  return <AuthContext.Provider value= {value }>{childern}</AuthContext.Provider>
};
// Custom hook to use auth context
 export const useAuth=()=>{
    const context= useContext(AuthContext);
    if(!context){
       throw new Error(' useAuth must be used within an AuthProvider')
     }
 return context;
 }
module.exports=AuthContext;
