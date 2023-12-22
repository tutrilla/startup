const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('recruitlangdb');
const languageRequests = db.collection('languageRequests');
const usersCollection = db.collection('users');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

// Gets user
function getUser(username) {
    return usersCollection.findOne({ username: username });
}

// Gets user by token
function getUserByToken(token) {
    return usersCollection.findOne({ token: token });
}

// Creates a new user in the database
async function createUser(username, password) {
    // Hashes the password before we put it into the database
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      username: username,
      password: passwordHash,
      token: uuid.v4(),
    };
    await usersCollection.insertOne(user);
  
    return user;
  }

// Inserts a language request into the database
async function addLanguageRequest(languageRequest) {
    const result = await languageRequests.insertOne(languageRequest);
    return result;
}

// Gets the number of language requests in the database
async function getNumOfLangRequests() {
    try {
        const count = await languageRequests.countDocuments();
        return count;
    } catch (error) {
        console.error('Error getting the number of language requests:', error);
        throw error;
    }
}

// Gets all the language requests from the database
async function getLangRequests() {
    try {
        const langRequests = await languageRequests.find({}).toArray();
        return langRequests;
    } catch (error) {
        console.error('Error getting language requests:', error);
        throw error;
    }
}

module.exports = { 
    addLanguageRequest,
    getNumOfLangRequests,
    getLangRequests,
    getUser,
    getUserByToken,
    createUser,
 };