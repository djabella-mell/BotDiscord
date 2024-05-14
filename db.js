const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'ouss',
    password: 'ouss',
    database: 'discord'
};

const pool = mysql.createPool(dbConfig);

async function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (error, results, fields) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

async function createTables() {
    const query = `
        CREATE TABLE IF NOT EXISTS Users(
            id VARCHAR(255) PRIMARY KEY,
            username VARCHAR(255)
        );
        CREATE TABLE IF NOT EXISTS Channels(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255)
        );
        CREATE TABLE IF NOT EXISTS Messages(
            id VARCHAR(255) PRIMARY KEY,
            content TEXT,
            user_id VARCHAR(255),
            channel_id VARCHAR(255),
            created_at TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES Users(id),
            FOREIGN KEY (channel_id) REFERENCES Channels(id)
        );
    `;
    try {
        await query(query);
        console.log('Tables créées avec succès !');
    } catch (error) {
        console.error(error);
    }
}

// Les autres fonctions d'accès à la base de données restent inchangées

module.exports = {
    createTables,
    insertUser,
    insertChannel,
    insertMessage,
    getLastNMessages,
    getLastNMessagesChannel,
    getMostActiveUser
};
