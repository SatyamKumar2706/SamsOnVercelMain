const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Routes = require("./routes/route.js");

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// Set up CORS configuration
app.use(cors({
    origin:"https://sams-frontend-on-versel--mocha.vercel.app/",
    credentials: true // Allow credentials to be included in requests
}));

app.use(express.json({ limit: '10mb' }));

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
