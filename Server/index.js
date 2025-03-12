const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const TodoModel = require('./Models/Todo');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')


app.post('/add',(req,res) =>{
    const task =req.body.task;
    TodoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
    
});

app.listen(301, () => {

    console.log('Server has started');
});