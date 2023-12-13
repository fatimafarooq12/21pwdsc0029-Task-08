const express = require('express');
const app = express();
const ecommerceRoutes = require('./ecommerceRoutes');
const passwordStrengthRoutes = require('./passwordStrengthRoutes');

app.get('/', (req, res) => {
  const message = `
    To access web , go to (localhost:3006) route.
    
  `;
  res.send(message);
});

app.use('/api/ecommerce', ecommerceRoutes);
app.use('/api/password', passwordStrengthRoutes);

const PORT = 3006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
