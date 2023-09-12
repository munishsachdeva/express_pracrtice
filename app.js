const express = require('express')
const app = express()
const path = require('path')

const adminRoutes = require('./routes/admin.js')

const shopRoutes = require('./routes/shop.js')
const contactUs = require('./routes/contactUs.js')
const success = require('./routes/success.js')
app.use(adminRoutes)
app.use(shopRoutes)
app.use(contactUs)
app.use(success)
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','/404.html'))
})
app.listen(3000)