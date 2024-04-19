const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/taskrouter'); 
const app = express();
 
app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());
app.use('/api', router);

 
module.exports = app;