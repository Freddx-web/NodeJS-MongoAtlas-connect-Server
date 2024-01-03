/*
* Data Controllers
*/

// import
import bcrypt from "bcryptjs";
import { MongoClient } from 'mongodb';

// URL Mongo Atlas
const uri = '';

// MongoClient
const client = new MongoClient(uri);

// GET 
const GetData = async (req, res, next) => {  

    async function run() {
        try {

            const database = client.db('database_1');
            const users = database.collection('users');

            // Query for a movie that has the title 'Back to the Future'
            const query = { name: 'Leanne Graham' };
            const user = await users.findOne(query);
      
            // Resquest
            res.status(201).json({ 
                message: "Get - Resquest", user
            });

        } catch (error) {
            // Error
            res.status(500);
            res.send(error.message);
          
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
      }
      //
      run().catch(console.dir);
};

// Export
export const methods = { 
  GetData 
}
