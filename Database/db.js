import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connection = () => {
  //* connect mongoose to database
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Couldn't connect to MongoDB" + error.message);
    });

  const db = mongoose.connection;
  // console.log(process.env.MONGO_URL);
  db.on("disconnected", console.error.bind(console, "connection error:"));
  db.once("connected", function () {
    console.log("Mongoose is connected to the MongoDB server!");
  });
};

export default connection;
