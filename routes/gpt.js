const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/gpt', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    console.log("GPT Request:", prompt);

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });

    const response = completion.choices[0].message.content;
    console.log("GPT Response:", response);

    res.json({ output: response });
  } catch (err) {
    console.error("GPT Error:", err.message);
    res.status(500).json({ error: "Failed to get GPT response" });
  }
});

module.exports = router;
