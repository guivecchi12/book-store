const express = require('express');

const inventory = require('./API/inventory/inventory-router');
const users = require('./API/users/users-router');

const app = express();

app.use(express.json());

app.use('/api/inventory', inventory);
// app.use('/api/users', users);



module.exports = app