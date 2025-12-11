
import mongoose from "mongoose";
const connectedDB= async()=>{
    try{
        const con= await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected SuccessFully:${con.connection.readyState}`);
    }catch(error){
     console.error(`Error:${error.message}`);
     process.exit(1);
    }
}
export default connectedDB;
