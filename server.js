const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Redirect framio.io and www.framio.io to www.rendrio.io
app.use((req, res, next) => {
  const host = req.hostname;
  if (host === 'framio.io' || host === 'www.framio.io') {
    return res.redirect(301, 'https://www.rendrio.io' + req.originalUrl);
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Rendrio coming soon is live on port ${PORT}`);
});
