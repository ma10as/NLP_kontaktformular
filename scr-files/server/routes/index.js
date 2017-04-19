var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = { 
		title: 'NLP Kontaktformular'
	}
    res.render('angular', data);
});

module.exports = router;
