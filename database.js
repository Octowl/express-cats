const mongoose = require("mongoose");

async function connectDB() {
  const connection = await mongoose.connect(
    "mongodb+srv://codedUser:coded123@cluster0.9v4dl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`Mongo connected ${connection.connection.host}`);
}

module.exports = connectDB;
