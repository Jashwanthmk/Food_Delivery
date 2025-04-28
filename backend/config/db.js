import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose
      .connect(
        "mongodb+srv://jashwanth:123@darshan.ohmaw02.mongodb.net/food_delivery"
      )
      .then(() => console.log("DB connected"));
}



// mongodb+srv://sadayrmca23:sadaymca23@cluster0.suu9o.mongodb.net