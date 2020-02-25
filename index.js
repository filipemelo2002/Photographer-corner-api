const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const Routes = require('./src/routes')

mongoose.connect('mongodb+srv://root:root@cluster0-ipxq5.mongodb.net/pc?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.use(cors())
app.use(express.json())
app.use(Routes)
app.listen(3000, ()=>console.log('your server is running at 3000'))