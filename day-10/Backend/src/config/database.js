const mongoose = require("mongoose");

async function connectToDb() {
    try {
        const uri = process.env.MONGO_URI;

        if (!uri) {
            console.error("❌ MONGO_URI missing");
            process.exit(1);
        }

        await mongoose.connect(uri);
        console.log("✅ Connected to database");
    } catch (error) {
        console.error("❌ DB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectToDb;