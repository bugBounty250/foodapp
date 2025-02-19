import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://foodapp:pBgN12u3JwQgMgVM@foodapp.h65fe.mongodb.net/?retryWrites=true&w=majority&appName=foodapp').then(()=>{
       console.log('DB connected') ;
    })
}