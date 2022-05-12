import { MongoClient } from 'mongodb';
//code defined here will never end up on the client side.
// /api/new/new-meetup

        // you should use try catch to handle any errors.
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://byronn:rGz7ERN87qmSRbpS@cluster0.1mjyj.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'meetup inserted' });
            
    }
}

export default handler;



