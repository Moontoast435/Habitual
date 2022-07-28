const { Pool } = require('pg');

const connectStr = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connectStr,
    ssl: true
});

module.exports = client;