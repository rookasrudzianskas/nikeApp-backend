const { MongoClient } = require('mongodb');
const uri =
  'mongodb+srv://admin:admin@cluster0.sxaqqwr.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');

module.exports = {
  products,
};
