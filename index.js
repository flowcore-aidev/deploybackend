require('dotenv').config();
const express = require('express');
const app = express();
const gptRoute = require('./routes/gpt');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', gptRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
