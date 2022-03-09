// //! YA NO import http from 'node'
// const http = require('http');
// const {saludar} = require('./test.js')
// const fs = require('fs');
// require('dotenv').config();

// const server = http.createServer((req, res) => {
//   const hola = saludar();
//   console.log(process.env.USER_ID);
//   res.write('Hola como estan')
//   res.end('<h1>Hola Mundo</h1>')
// })

// server.listen(4000, () => {
//   console.log('Estoy escuchando al puerto 4000')
// })

const express = require('express');
const app = express();
const users = require('./routes/users');
const products = require('./routes/products');


app.use('/productos',products)
app.use('/usuarios',users)

app.listen(4000,()=>{
  console.log('Estoy escuchando al puerto 4000');
})

