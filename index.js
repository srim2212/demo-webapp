const express = require('express');
const app = express();
const port = process.env.port || 3000

app.get('/',(req,res)=>{
    res.send('Hello, this is demo web application!');
});

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});

