const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const TodoModel = require('./Models/Todo');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ramwijesooriya:ramwijesooriya@todo.d8tiw7l.mongodb.net/?retryWrites=true&w=majority&appName=todo')
// mongodb+srv://ramwijesooriya:ramwijesooriya@todo.d8tiw7l.mongodb.net/?retryWrites=true&w=majority&appName=todo

app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))

})

app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err)) 
})


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