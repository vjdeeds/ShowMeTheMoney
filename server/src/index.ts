import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

//Read the env variables
const PORT = process.env.PORT;
const XERO_API_URL = process.env.XERO_API_URL;

const app = express();
app.use(cors());

app.get("/api/balance-sheet", async (req: Request, res: Response) => {
  try {
   if (XERO_API_URL) {
    const response = await axios.get(XERO_API_URL);
    res.json(response.data);
   }
  } catch (error) {
    console.error("Error fetching balance sheet data:", error);
    res.status(500).json({ message: "Error fetching balance sheet data" });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export { app, server };
