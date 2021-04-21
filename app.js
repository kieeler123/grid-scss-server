const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');

const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

nunjucks.configure('template',{
    autoescape:true,
    express:app
});

app.use((req,res,next)=>{
    app.locals.isLogin = true;
    app.locals.req_path = req.path;
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends : false}));

app.use(express.static(path.join(__dirname,'template')));

app.get('/',(req,res)=>{
    res.render('admin/main.html',
    {title : "grid-scss-server"}
    );
});

app.listen(port,()=>{
    console.log('this port numper is : ',port);
});