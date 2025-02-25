module.exports = (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const userMessage = req.body.message || "Hello";

    // AI Response (Replace with real logic later)
    const aiResponse = `Alexis: Hmm... I'm thinking about that. Here's what I feel about "${userMessage}".`;

    res.status(200).json({ response: aiResponse });
};
