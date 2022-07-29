const pgdb = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/dev_seeds.sql').toString();

pgdb.query(seeds, (err, res) => {
    if (err) throw err;
    console.log('Dev PostgreSQL database seeded')
    client.end();
});