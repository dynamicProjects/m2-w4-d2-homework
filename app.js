const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){
res.send('It works!');
})
 app.listen(port, ()=>{
    console.log(`Express is running on port ${port}!`)
})

