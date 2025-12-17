// // API Base Configuration
// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// // HTTP Client with error handling
// const apiClient = async (endpoint, options = {}) => {
//   const url = `${API_BASE_URL}${endpoint}`;
//   const config = {
//     ...options,
//     headers: {
//       'Content-Type': 'application/json',
//       ...options.headers,
//     },
//   };

//   try {
//     const response = await fetch(url, config);
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || 'Something went wrong');
//     }

//     return data;
//   } catch (error) {
//     console.error('API Error:', error);
//     throw error;
//   }
// };

// // Authentication API Service
// const authAPI = {
//   // Register new user
//   register: async (userData) => {
//     return apiClient('/auth/register', {
//       method: 'POST',
//       body: JSON.stringify(userData),
//     });
//   },

//   // Login user
//   login: async (credentials) => {
//     return apiClient('/auth/login', {
//       method: 'POST',
//       body: JSON.stringify(credentials),
//     });
//   },

//   // Get current user profile
//   getProfile: async (token) => {
//     return apiClient('/auth/me', {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   },

//   // Logout user
//   logout: async (token) => {
//     return apiClient('/auth/logout', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   },
// };

// export default authAPI;
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const apiClient = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  }
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'something went wrong')
    }
    return data;
  } catch (error) {
     console.error('API Error' , error)
     throw error;
  }
}
 const authAPI={
      register:async(userData)=>{
         return apiClient('/auth/register',{
          method:'POST',
          body:JSON.stringify(userData)

         }) 
      },
      login:async(Credential)=>{
        return apiClient('/auth/login',{
          method:'POST',
          body:JSON.stringify(Credential)
        })
      },
      getProfile:async(token)=>{
        return  apiClient('/auth/me',{
          methods:"GET",
          headers:{
             Authorization: `Bearer ${token}`,
          }
        })
      },
      logout:async()=>{
        return apiClient('/auth/logout',{
          method:'GET',
          headers:{
            Authorization:`Bearer${token}`
          }
        })
      }
 }
  export default authAPI;