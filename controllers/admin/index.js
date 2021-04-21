const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

router.get('/table', ctrl.get_table );

router.get('/table/write', ctrl.get_table_write );

router.post('/table/write', ctrl.post_table_write );

router.get('/table/detail/:id', ctrl.get_table_detail );

router.get('/table/edit/:id', ctrl.get_table_edit );

router.post('/table/edit/:id', ctrl.post_table_edit );

router.get('/table/delete/:id', ctrl.get_table_delete );


module.exports = router;


