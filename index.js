const express = require('express');
const app = express();
const port = process.env.port || 80

app.get('/',(req,res)=>{
    res.send('Hi, this is demo web application!');
});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

