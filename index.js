//! YA NO import http from 'node'
const http = require('http');
const fs = require('fs')
require('dotenv').config();

// const saludo = require('./test')


const server = http.createServer((req, res) => {
  // console.log('ESTA ES LA PETICIÓN',req);
  // console.log('ESTA ES LA RESPUESTA',res);
  // const hola = saludo();
  // console.log(saludo);
  fs.readFile('index.html',(err,data)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    console.log(process.env.USER);
    return res.end()
  })
  // res.statusCode = 200 
  // res.setHeader('Content-Type', 'text/html')
  // // res.writeHead(200,{'Content-Type':'text/html'})
  // // res.write(req.url)
  // res.end('<h1>Hola Mundo</h1>')
})

server.listen(4500, () => {
  console.log('Estoy escuchando al puerto 4500')
})