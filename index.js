// code away!
const express = require('express');
const server = express();
const useMiddleware = require('./server');

server.use(useMiddleware);

server.use(express.json());

server.use('/', useMiddleware);

const port = 5000;

server.listen(port, ()=>{
    console.log(`Server eavesdropping on port ${port}`)
})