require('dotenv').config() 
const express = require('express')
const path = require('path')
const http = require('http')
const exp = require('constants')
const { response } = require('express')
const routerCar = require('./routes/car.routes')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 3003

app.use(express.json())
//
app.use(express.urlencoded({extended:true}))
// чтобы мы могли передавать параметры в строке
app.use(express.static('public'))
//подключаем статичные файлы
app.use((err,request,response,next)=>{
    // middleware - промежуточный обработчик
    console.log(err);
    response.status(500).send('server crash')
    next()

})

app.use('/api/Car',routerCar)

app.use('//', (req, res) =>{
    res.status(200).json("ХЕ-Хе")
})



server.listen(port,()=>{
    console.log(`Server runnig on post http://localhost:${port}`);
})

module.exports = app