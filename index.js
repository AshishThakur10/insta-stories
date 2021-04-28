const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Ash1:Ash1@cluster0.pbef3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      dbName: 'InstaStory',
      useNewUrlParser : true,
      useUnifiedTopology: true
    
    }
    )
    .then(()=> {
    console.log('Mongodb connected……');
    });

require('./models/user')
require('./models/stories')

app.get('/', (req,res)=>{
    res.send('home page')
})

app.use(express.json())
app.use(require('./routes/auth'));
app.use(require('./routes/stories'));

app.use(require('./routes/user'));











app.listen(3000);