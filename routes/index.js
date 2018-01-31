const express = require('express');
const router = express.Router();
const tifuCtrl = require('../controllers/tifu.controller.js');
const userCtrl = require('../controllers/user.controller.js');

/* GET home page. */
router.get('/', function(req, res) {
    return tifuCtrl.listTifu(req, res);
});

router.get('/newPost', function(req, res) {
    return tifuCtrl.getPost(req, res);
});

router.post('/newPost', function(req, res) {
    return tifuCtrl.createPost(req, res);
});

router.put('/:id', function(req, res) {
    return tifuCtrl.upVote(req, res);
});

router.delete('/:id', function(req, res) {
    return tifuCtrl.deletePost(req, res);
});
/*Users*/
router.get('/auth', function(req, res) {
    return userCtrl.getAuth(req, res);
});

router.post('/register', function(req, res) {
    return userCtrl.register(req, res);
});

router.post('/login', function(req, res) {
    return userCtrl.login(req, res);
});

router.get('/out', function(req, res) {
    return userCtrl.logout(req, res);
});

module.exports = router;
