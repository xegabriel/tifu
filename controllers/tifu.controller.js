const Tifu = require('../models/tifu.model.js');

exports.createPost = function(req, res) {
    console.log(req.body)
    const post = new Tifu({
        createdBy: req.session.user.email,
        entry: req.body.entry
    });

    post.save();

    res.redirect(301, '/');
};

exports.getPost = function(req, res) {
    res.render('newPost', {title: 'Today I f* up - New story', isLoggedIn: req.session.user?true:false});
};

exports.listTifu = function(req, res) {
    const query = Tifu.find();
    query.sort({createdOn: 'desc'}).limit(10).exec(function(err, results) {
        res.render('index', {title: 'Today I f* up - Home', tifus: results,isLoggedIn: req.session.user?true:false})
    });

};

exports.upVote = function(req, res) {
    Tifu.findById(req.params.id, function(err, tifu) {
        if (err) {
            res.send(err);
        }
        else if (tifu) {
            tifu.votes = tifu.votes+1;
            tifu.save(function(err) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json({message: 'Updated!'});
                }
            });
        }
        else {
            res.json({message:'No tifu found'});
        }
    });

};

exports.deletePost = function(req, res) {
     var id = req.param("id");
    Tifu.findById(id, function(err, tifu) {
        if (err) {
            res.send(err);
        }
        else if (req.session.user && tifu.createdBy == req.session.user.email) {
                    Tifu.remove({
                        _id: id 
                    }, function(err){
                        if (err) {
                            console.log(err)
                        }
                        else {
                            res.json({message: 'Deleted!'});
                        }
            });
        }
        else {
            res.json({message:'Not authorized!'});
        }
    });

};