var express = require('express');
var router = express.Router();
const conn = require('../connection/connection');
const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',message:req.flash('msg'),message2:req.flash('msgg') });
});
router.get('/check', function(req, res, next) {
  res.render('check', { msg: "Checking" });
});
router.get('/display', function(req, res, next) {
  res.send('Displaying');
});

router.post('/submit-form', function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const tel = req.body.tel;
  const location = req.body.location;
  const data={id:'',name:name,email:email,tel:tel,location:location};
  conn.query('INSERT INTO corporate SET ?', data, function (error, results) {
    if (error){ throw error;
    console.log(error);
    }
    else{
      req.flash('msg', 'Data submitted succesfully.')
      res.redirect('/');
      //res.render('index', { msg: 'Data submitted succesfully.' });
  }
  }); 
})

router.post('/contact-us', (req, res) => {
  const subject = req.body.subject;
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const data={id:'',subject:subject,name:name,email:email,message:message};
  conn.query('INSERT INTO corporate_contact SET ?', data, function (error, results) {
    if (error){ throw error;
    console.log(error);
    }
    else{
      req.flash('msgg', 'Data submitted succesfully.')
      res.redirect('/#contact');
      //res.render('index', { msg: 'Data submitted succesfully.' });
  }
  }); 
})
module.exports = router;
