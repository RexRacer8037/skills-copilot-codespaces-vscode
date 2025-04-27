// Create web server
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
let mongoServer;
async function connectToMongoDB() {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
}