const { Pool } = require('pg');

const connectStr = process.env.DATABASE_URL;

let pool
if (process.env.NODE_ENV === 'production') {
    pool = new Pool({
    connectionString: connectStr,
    ssl: {
        rejectUnauthorized: false
    }
});
} else {
    pool = new Pool({
        connectionString: connectStr
    });
};

module.exports = pool;