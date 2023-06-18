const mongoose = require("mongoose");

const connectDb = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to the database");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
};
module.exports = connectDb;
