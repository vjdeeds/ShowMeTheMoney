// import express, { Request, Response } from "express";
// import cors from "cors";
// // import { PORT } from "./config";
// import axios from "axios";

// const PORT = 4000;
// const XERO_API_URL = "http://localhost:3000/api.xro/2.0/Reports/BalanceSheet";
// const app = express();
// app.use(cors());

// app.get("/api/balance-sheet", async (req: Request, res: Response) => {
//   try {
//     const response = await axios.get(XERO_API_URL);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching balance sheet data:", error);
//     res.status(500).json({ message: "Error fetching balance sheet data" });
//   }
// });

// const server = app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// export { app, server };

import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import { PORT, XERO_API_URL } from "./config";
// Use environment variables for flexibility
// const PORT = process.env.PORT || 4000;
// const IS_DOCKER = process.env.IS_DOCKER || "false"; // Default to false if not running in Docker

// // Xero API URL: check if running inside Docker or locally
// const XERO_API_URL =
//   IS_DOCKER === "true"
//     ? "http://xero-api:3000/api.xro/2.0/Reports/BalanceSheet" // Dockerized Xero API
//     : "http://host.docker.internal:3000/api.xro/2.0/Reports/BalanceSheet"; // Local Xero API

const app = express();
app.use(cors());

app.get("/api/balance-sheet", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(XERO_API_URL);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching balance sheet data:", error);
    res.status(500).json({ message: "Error fetching balance sheet data" });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export { app, server };
