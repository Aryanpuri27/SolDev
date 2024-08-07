import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Export the environment variables
export const SECRET_KEY = process.env.SECRET_KEY;
