const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Root Route to Check Server Status
app.get("/", (req, res) => {
    res.send("Alexis AI Roleplay Server is Running!");
});

// FIXED: Correct API Route for AI Chat Responses
app.post("/chat", (req, res) => {
    const userMessage = req.body.message;

    // Simple AI Response (Replace with real AI logic later)
    const aiResponse = generateAIResponse(userMessage);
    
    res.json({ response: aiResponse });
});

// AI Response Generator Function
function generateAIResponse(input) {
    return `Alexis: Hmm... I'm thinking about that. Here's what I feel about "${input}".`;
}

// Fix: Ensure Vercel Works with Dynamic Ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
