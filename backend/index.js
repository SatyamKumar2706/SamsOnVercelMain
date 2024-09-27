const express = require("express");
const cors = require("cors"); // Import the 'cors' package
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Routes = require("./routes/route.js");

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// Custom CORS configuration to allow only one origin
const corsOptions = {
    origin: "https://sams-frontend-on-versel--mocha.vercel.app", // Allow only this origin
    methods: "GET, PUT, POST, DELETE, PATCH, OPTIONS", // Allowed HTTP methods
    allowedHeaders: "Content-Type, Authorization, X-Requested-With", // Allowed request headers
    credentials: true, // Allow cookies and authorization headers in cross-origin requests
    optionsSuccessStatus: 200 // Legacy browsers choke on status 204, so use 200 instead
};

// Use CORS middleware with custom configuration
app.use(cors(corsOptions));

app.use(express.json({ limit: '10mb' })); // Parse JSON payloads

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

// Use the routes defined in the `route.js` file
app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
