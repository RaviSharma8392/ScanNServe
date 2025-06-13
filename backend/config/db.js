const mongoose = require('mongoose');
const URI = process.env.URI;

const connectDataBase = async () => {
  try {
    await mongoose.connect(URI);

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Error in Database:", error);
  }
};

module.exports = connectDataBase;
