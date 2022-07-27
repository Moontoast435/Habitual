const pgdb = require('../dbConfig/pg/init.js') // change this when tims made the file

class User {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.passwordDigest = data.hashed_password;
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                let usersData = await pgdb.query(`SELECT * FROM users;`);
                let users = usersData.rows.map(user => new User(user));
                resolve(users);
            } catch (err) {
                reject(`Users not found: ${err}`);
            }
        })
    }

    static create({username, password}){
        return new Promise(async (resolve, reject) => {
            try {
                let userData = await pgdb.query(`INSERT INTO users (username, hashed_password) VALUES ($1, $2) RETURNING username;`, [ username, password ]);
                let newUser = new User(userData.rows[0]);
                resolve(newUser);
            } catch (err) {
                reject(`Error creating new user: ${err}`);
            }
        })
    }

    static findByUsername(username) {  
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await pgdb.query(`SELECT * FROM users WHERE username = $1;`, [ username ]);
                let user = new User(userData.rows[0]);
                resolve(user);
            } catch (err) {
                reject(`User not found, username is not in database: ${err}`);
            }
        })
    }

    destroy(){
        return new Promise(async (resolve, reject) => {
            try {
                const destruction = await pgdb.query(`DELETE FROM users WHERE username = $1 RETURNING username;`, [ this.username ]);
                const username = destruction.rows[0].username
                resolve(`This user has now been deleted: ${username}. Bye bye!👋`);
            } catch (err) {
                reject(`This user could not be deleted.`)
            }
        })
        

    }
}

module.exports = User;