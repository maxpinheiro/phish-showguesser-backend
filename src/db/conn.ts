// exposes a global connection to the atlas database by exporting a mongodb client

import { AnyError, Collection, Db, MongoClient } from "mongodb";
import { User } from "../models/types";
const connectionString = process.env.ATLAS_URI;
let client: MongoClient | null = null;
if (connectionString) {
    client = new MongoClient(connectionString, { });
}

let dbConnection: Db;

export function connectToServer(callback: (err?: AnyError) => void) {
    if (!client) {
        console.log('No client found.');
        return;
    }
    client.connect((err, db) => {
        if (err || !db) {
            return callback(err);
        }

        dbConnection = db.db("database_name");
        console.log("successfully connected to mongodb");
        const userCollection: Collection<User.Type> = dbConnection.collection('users');

        return callback();
    })
};

export function getDb() {
    return dbConnection;
};
