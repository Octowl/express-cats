const mongoose = require("mongoose");

async function connectDB() {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Mongo connected ${connection.connection.host}`);
}

module.exports = connectDB;
