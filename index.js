const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// console.log(process.env.DB_USER)
// console.log(process.env.SEC_KEY)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SEC_KEY}@cluster0.g9drewa.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




app.get('/', (req, res) => {
    res.send('Genius Car Server is Running');
})

app.listen(port, () => {
    console.log(`Genius Car server on ${port}`);
})