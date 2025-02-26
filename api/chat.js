const OpenAI = require("openai"); // Fixing import issue
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load OpenAI API key securely

const openai = new OpenAI.OpenAI({ apiKey: process.env.OPENAI_API_KEY }); // Correcting the constructor

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
    if (!req.body.message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [
                { role: "system", content: "You are Alexis, an AI roleplay character. Respond in a natural, immersive, and engaging way." },
                { role: "user", content: req.body.message }
            ],
            max_tokens: 200
        });

        res.json({ response: response.choices[0].message.content });
    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ error: "Failed to get AI response." });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
