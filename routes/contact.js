const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'nootjone@gmail.com',
			password: 'something'
		}
	});

	var mailOptions = {
		from: 'Doge <sodogemuchwow@hotmail.com>',
		to: 'dogesowow@gmail.com',
		subject: 'Much crazy web app',
		text: 'You have new-uh message-uh. Look-uh hiro: Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
		html: '<p>You have new-uh message-uh. Look-uh hiro:</p><ul><li>Name: ' + req.body.name+ '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>',
		tls: { rejectUnauthorized: false }
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			res.redirect('/');
		} else { 
			console.log('Message-uh sent-uh, wow!' + info.response);
			res.redirect('/');
		}

	});
});

module.exports = router;