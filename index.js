const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/chat", (req, res) => {
    const userMessage = req.body.message;
    
    // Simulated AI Response (Modify this with actual AI processing)
    const aiResponse = generateAIResponse(userMessage);
    
    res.json({ response: aiResponse });
});

function generateAIResponse(input) {
    return `Alexis: I’m thinking about that... and here's my response to "${input}".`;
}

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
