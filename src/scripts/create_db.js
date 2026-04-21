require('dotenv').config();
const { Client } = require('pg');

const user = process.env.DB_USER || process.env.PGUSER || 'postgres';
const host = process.env.DB_HOST || process.env.PGHOST || 'localhost';
const password = process.env.DB_PASSWORD || process.env.PGPASSWORD || 'password';
const port = parseInt(process.env.DB_PORT || process.env.PGPORT || '5432', 10);
const dbName = process.env.DB_NAME || process.env.PGDATABASE || 'lexy';

async function ensureDatabase() {
  const client = new Client({ user, host, password, port, database: 'postgres' });
  try {
    await client.connect();
    const res = await client.query('SELECT 1 FROM pg_database WHERE datname=$1', [dbName]);
    if (res.rowCount === 0) {
      console.log(`Database '${dbName}' not found — creating...`);
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database '${dbName}' created.`);
    } else {
      console.log(`Database '${dbName}' already exists.`);
    }
  } catch (err) {
    console.error('Failed to ensure database:', err.message);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
}

ensureDatabase();
