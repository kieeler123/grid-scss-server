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

router.get('/admin/table',(req,res)=>{
    res.render('admin/table.html');
});

router.get('/admin/table/write', ( _ , res) => {
    res.render( 'admin/write.html');
});

router.post('/admin/table/write', ( req , res ) => {
    res.send(req.body);
});

module.exports = router;