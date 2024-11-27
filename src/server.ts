import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
