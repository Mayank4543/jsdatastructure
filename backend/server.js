// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import connectDB from './config/db.js';
// import authRoutes from './routes/auth.js';

// // Load env vars
// dotenv.config();

// // Connect to database
// connectDB();

// // Initialize express app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api/auth', authRoutes);

// // Root route
// app.get('/', (req, res) => {
//   res.json({
//     success: true,
//     message: 'Learning Platform API is running',
//     version: '1.0.0'
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: 'Something went wrong!',
//     error: err.message
//   });
// });

// // 404 handler
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found'
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
// });

// export default app;
import express from 'express';
import  dotenv  from 'dotenv';
import cors from 'cosrs';

import connectedDB from './config/db.js';

dotenv.config();
connectedDB();
const app= express();
// Intialising Middle ware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
      res.status(200).json({
        success:true,
        message:"Learing Platform",
        version:"1.02.2"
    
    })
})
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.PORT}`)
})

