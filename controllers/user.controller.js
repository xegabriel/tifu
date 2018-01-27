const User = require('../models/user.model.js');

exports.register = function(req, res) {
    console.log(req.body)
    const post = new User({
        email: req.body.email,
        password: req.body.password
    });

    post.save();

    res.redirect(301, '/');
};

exports.getAuth = function(req, res) {
    res.render('auth', {title: 'Today I f* up - Authenticate',isLoggedIn: req.session.user?true:false});
};

exports.login = function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({email:email, password: password}, function(err, user){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        if(!user){
            return res.status(404).send();
        }
        req.session.user = user;
        res.redirect(301, '/');
        return res.status(200).send();
    });
};

exports.logout = function(req, res) {
    req.session.destroy();
    return res.status(200).send("Logged out! Return to <a href=\"\\\">Homepage</a>");
};