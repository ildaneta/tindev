const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-l8xqm.mongodb.net:27017,cluster0-shard-00-01-l8xqm.mongodb.net:27017,cluster0-shard-00-02-l8xqm.mongodb.net:27017/omnistack8?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);

//MVC - Model View Controller

