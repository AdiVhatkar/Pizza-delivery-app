const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('home')
  })

// set Template Engine 
app.use(expressLayout)
app.set('views', path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.listen(PORT,(res,req)=>{
console.log("listening on port 3000")
})