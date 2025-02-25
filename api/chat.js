const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// API Chat Route - AI Response Processing
app.post("/api/chat", (req, res) => {
    const userMessage = req.body.message;

    // AI Response Simulation (Replace with real AI model later)
    const aiResponse = `Alexis: Hmm... I'm thinking about that. Here's what I feel about "${userMessage}".`;
    
    res.json({ response: aiResponse });
});

// Fix: Ensure Vercel Uses Dynamic Ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});
