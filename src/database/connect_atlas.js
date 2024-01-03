/**
 *  FUENTE: https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/
 *          https://www.youtube.com/watch?v=pGAa-2mJuMo
 */
//import { MongoClient } from "mongodb";
//const { MongoClient } = require("mongodb")
import { MongoClient } from 'mongodb';

// Replace the uri string with your connection string.
const uri = 'mongodb+srv://Frexx23:UEKN38HkH9IiG9oV@atlascluster.17cfbg9.mongodb.net/';

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('database_1');
    const users = database.collection('users');
    
    
    // Query for a movie that has the title 'Back to the Future'
    const query = { 
      name: 'Leanne Graham' };
    const user = await users.findOne(query);

    console.log(user);
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);