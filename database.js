const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('recruitlangdb');
const languageRequests = db.collection('languageRequests');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addLanguageRequest(languageRequest) {
    const result = await languageRequests.insertOne(languageRequest);
    return result;
}

async function getNumOfLangRequests() {
    try {
        const count = await languageRequests.countDocuments();
        return count;
    } catch (error) {
        console.error('Error getting the number of language requests:', error);
        throw error;
    }
}

async function getLangRequests() {
    try {
        const langRequests = await languageRequests.find({}).toArray();
        return langRequests;
    } catch (error) {
        console.error('Error getting language requests:', error);
        throw error;
    }
}

module.exports = { addLanguageRequest, getNumOfLangRequests, getLangRequests }