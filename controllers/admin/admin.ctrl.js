const models = require('../../models');

exports.get_table = ( _ , res) => {
    models.Products.findAll({

    }).then( (table) => {
        // DB에서 받은 products를 products변수명으로 내보냄
        res.render( 'admin/table.html' ,{ table : table });
    });
}

exports.get_table_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_table_write = ( req , res ) => {
    models.Products.create({
        name : req.body.name,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/table');
    });
}

exports.get_table_detail = ( req , res ) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/detail.html', { product: product });  
    });
};

exports.get_table_edit = ( req , res ) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/write.html', { product : product });
    });
};

exports.post_table_edit = ( req , res ) => {

    models.Products.update(
        {
            name : req.body.name,
            price : req.body.price ,
            description : req.body.description
        }, 
        { 
            where : { id: req.params.id } 
        }
    ).then( () => {
        res.redirect('/admin/table/detail/' + req.params.id );
    });

}

exports.get_table_delete = ( req , res ) => {
    models.Products.destroy({
        where: {
            id: req.params.id
        }
    }).then( () => {
        res.redirect('/admin/table');
    });
};