const dotenv = require('dotenv'); //dotenv -> purpose -> hume fixed port use nhi karna , env variable se pata lagna chahiye ki konsa port use karna hai
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());


app.get('/',(req,res)=>{
    res.send('hello world');
})

module.export = app;

