const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const userRouter = require('./routes/user-routes');
const blogRouter = require('./routes/blog-routes');

const URL= 'mongodb+srv://hasirbeg01:QemKljV13XACeOUl@cluster0.jthwwwi.mongodb.net/MyBlogs?retryWrites=true&w=majority'
mongoose.connect(URL)
.then(()=>{console.log("DB Connected")})
// QemKljV13XACeOUl

app.use(cors())

app.use(express.json())

app.use(userRouter)
app.use(blogRouter)

const PORT = 8080
app.listen(PORT,()=>{
    console.log(`connect to ${PORT}`)
})