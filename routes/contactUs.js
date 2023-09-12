const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/contactUs',(req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contactUs.html'))
 })

 router.post('/contactUs',(req,res,next) => {
    // res.sendFile(path.join(__dirname, '../', 'views', 'success.html'))
    //  console.log(req.body)
     res.redirect('/success');
})

router.get('/success',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','success.html'))
})
module.exports = router;