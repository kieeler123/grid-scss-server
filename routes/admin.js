const express = require('express');
const router = express.Router();

function fmid(req,res,next){
    console.log("first middleware start");
    next();
}

function smid(req,res,next){
    console.log("second middlewaew start");
    next();
}

router.get('/',fmid,smid,(req,res)=>{
    res.render('admin/main.html',
    {title : "grid-server"}
    );
});

router.get('/table',(req,res)=>{
    res.render('admin/table.html');
})

module.exports = router;