const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Sina:test123@cluster0-kdql8.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true});

const partsRouter = require('./routes/parts');

app.use('/parts', partsRouter);

app.listen(port, () => {
    console.log('Server is running');
});