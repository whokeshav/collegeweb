import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected");
    });
    connection.on("error", () => {
      console.log("eroor occured , please make sure db is running ");
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
