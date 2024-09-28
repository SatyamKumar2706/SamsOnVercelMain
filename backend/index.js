const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Routes = require("./routes/route.js");

dotenv.config(); // Load environment variables


// app.use(cors()); // Temporarily allow all origins

// Set up CORS configuration
const corsOptions = {
    origin: 'https://sams-frontend-on-versel--mocha.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', corsOptions.origin);
    res.header('Access-Control-Allow-Methods', corsOptions.methods.join(', '));
    res.header('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(', '));
    res.header('Access-Control-Allow-Credentials', corsOptions.credentials);
    
    if (req.method === 'OPTIONS') {
        return res.sendStatus(corsOptions.optionsSuccessStatus);
    }
    next();
});

app.use(express.json({ limit: '10mb' }));

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.use('/', Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`);
});
