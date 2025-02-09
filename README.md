# ShowMeTheMoney  

A simple one-page application that displays the Balance Sheet Report from Xero. This application consists of a **React** client and an **Express.js** backend.  

## Overview  

- The **backend** interacts with a third-party **Xero API**, fetching mock balance sheet data.  
- The **client** sends an API request to the backend and displays the received data in a tabular format.  

## Setup  

You can run the application using **Docker** or **manual setup**.  

### 🚀 Running with Docker  

1. Clone the repository:  

   ```bash
   git clone https://github.com/vjdeeds/ShowMeTheMoney.git
   cd ShowMeTheMoney
   ```

2. Start the application using **Docker Compose**:  

   ```bash
   docker-compose up --build
   ```

3. Once the containers are up, access the application at:  

   **🔗 [http://localhost:3006/](http://localhost:3006/)**  

---

### 🛠️ Running Without Docker  

If you prefer running the application manually, follow these steps:  

1. **Create an .env file in the server folder and copy the contents of .env.sample.server to this file**

2. **Create an .env file in the client folder and copy the contents of .env.sample.client to this file**

3. **Run the mock Xero Balance Sheet API**  
   
   Pull and run the **mock Xero API** Docker image from Docker Hub:  

   ```bash
   docker pull jaypeng2015/show-me-the-money
   docker run -p 3000:3000 jaypeng2015/show-me-the-money:latest
   ```

4. **Start the Backend**  

   Navigate to the **server** folder:  

   ```bash
   cd server
   npm install
   npm start
   ```

5. **Start the Client**  

   Navigate to the **client** folder:  

   ```bash
   cd client
   npm install
   npm start
   ```

6. **Access the Application**  

   Once the **mock API**, **backend**, and **frontend** are running, open:  

   **🔗 [http://localhost:3006/](http://localhost:3006/)**  

---

## 🧪 Running Tests

### ✅ Running Tests for the Backend or Frontend

Navigate to the `server` or `client` directory and execute:

```bash
   npm test
   ```
To test coverage:

```bash
  npm run test:coverage
   ```

---

### 📌 Notes  

- Ensure that **Node.js** and **npm** are installed if running the app without Docker.  
- The backend fetches data from `http://localhost:3000/api.xro/2.0/Reports/BalanceSheet`. Ensure that the **mock API** is running on port **3000** before starting the backend.  
- The client communicates with the backend at `http://localhost:4000/api/balance-sheet`.  

---

### 🏗️ Tech Stack  

- **Frontend**: React, TypeScript, TailwindCSS  
- **Backend**: Express.js, Axios  
- **Mock API**: Dockerized Xero Balance Sheet API  
