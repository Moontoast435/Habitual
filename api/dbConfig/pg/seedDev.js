const pgdb = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/dev_seeds.sql').toString();

pgdb.query(seeds, () => console.log('Dev database seeded'));