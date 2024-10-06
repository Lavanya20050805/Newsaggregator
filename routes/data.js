const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/news', (req, res)=>{
    
    res.sendFile(path.join(__dirname, '../data/airports.json'))
})

router.get('/news', (req, res)=>{

    res.sendFile(path.join(__dirname, '../data/flights.json'))
})

module.exports = router