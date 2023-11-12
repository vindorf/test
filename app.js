const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req,res)=> {
    
    res.render('index');
    
    
    
});
app.get('/search', (req, res) => {
  
    res.send(req.query);
    console.log(req.query);
});

app.listen(3000,()=> {console.log('servus server 3000')})