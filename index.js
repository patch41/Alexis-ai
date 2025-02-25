const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Root Route (Home Page)
app.get("/", (req, res) => {
    res.send("Alexis AI Roleplay Server is Running!");
});

// FIXED API Chat Route
app.post("/api/chat", (req, res) => {
    const userMessage = req.body.message;

    // AI Response Generation (Simple Example)
    const aiResponse = `Alexis: Hmm... I'm thinking about that. Here's what I feel about "${userMessage}".`;
    
    res.json({ response: aiResponse });
});

// Fix: Ensure Vercel Uses Dynamic Ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
