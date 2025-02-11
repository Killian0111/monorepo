// Load the express module to create a web application
import cors from "cors";

import express from "express";

const app = express();

if (process.env.CLIENT_URL != null) {
  app.use(cors({ origin: [process.env.CLIENT_URL] }));
}

// ...BEAUCOUP de lignes à lire, jusqu'à :

// Import the API router

import router from "./router";

// Mount the API router under the "/api" endpoint

app.use(router);

// ...BEAUCOUP de lignes à lire, jusqu'à :

export default app;
