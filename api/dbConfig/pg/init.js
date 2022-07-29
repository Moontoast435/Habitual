const { Pool } = require('pg');

const connectStr = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connectStr,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;