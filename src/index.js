const express = require('express');
require('dotenv').config();
const { sequelize } = require('./models');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());
app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL');
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
})();
