import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1 || connectionState === 2) {
    console.log("Already connected or connecting...");
    return;
  }

  try {
    await mongoose.connect(mongoURI!, {
      dbName: "aniTalk",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Error connecting to MongoDB");
  }
};

export default connect;
