const express = require('express')
const app=express()
const news = require('./routes/news');
const moment = require('moment');
app.locals.moment = moment;

app.use(express.static('public'));
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/',news);

// app.set('views','./views');

app.listen(9999,()=> console.log("started"));