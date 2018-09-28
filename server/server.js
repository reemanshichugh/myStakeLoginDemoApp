const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/users');
const port = process.env.PORT || 5000;
var pg = require('pg');
const redis = require('redis');

const axios = require('axios');

const LocalStrategy = require('passport-local').Strategy

var client = redis.createClient();

/*  PASSPORT SETUP  */
const passport = require('passport')
app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});




/*  REDIS SETUP  */
client.on('connect', function() {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

client.set('mytestkey', 'my test value', redis.print);
client.get('mytestkey', function (error, result) {
    if (error) {
        console.log(error);
        throw error;
    }
    console.log('GET result ->' + result);
});
// console.log('Connected to PostgreSQL database');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// var pgp = require('pg-promise')
// var db = pgp('postgres://username:password@host:port/database')
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/sz', (req, res) => {
  console.log('*************************************get api*************************************');
  User.findAll({
  }).then((userFromRepo) => {
    console.log("useruserFromRepoFromRepo", userFromRepo);
    if (userFromRepo) {
     
      res.statusCode = 202;
      res.json({ userFromRepo });
      res.end();
    }
  });
});

app.post('/insertDetails', function (req, res) {
  console.log("Got a POST request for the homepage", req.body);
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',failureFlash: true })
  //   res.json( { express: 'Hello POST',
  //  result: req.body });
  console.log("Userdasd", User);
  User.create({
    name: req.body.personName,
    age: req.body.age,
  }).then((userFromRepo) => {
    console.log("userFromRepo", userFromRepo);
    if (userFromRepo) {
      console.log("GostatusCode", req.statusCode);
      res.statusCode = 202;
      res.json({
        status: 202,
        message: 'User Entered Successfully',
      });
      client.set('personName', req.body.personName, redis.print);
      client.get('personName', function (error, result) {
        if (error) {
            console.log(error);
            throw error;
        }
        console.log('GET personName ->' + result);
    });
      res.end();
    }
  }).catch((error) => {
    console.log(error, 'error');
  })
  // res.send('UserdasdUserdasd')
  // res.end();
})


app.post('/signUpDetails', function(req,res){
  console.log("Got a POST request for the homepage", req.body);
  console.log("Userdasd", User);
  User.create({
    email: req.body.email,
    password: req.body.password,
  }).then((userFromRepo) => {
    console.log("userFromRepo", userFromRepo);
    if (userFromRepo) {
      console.log("GostatusCode", req.statusCode);
      res.statusCode = 202;
      res.json({
        status: 202,
        message: 'User Entered Successfully',
      });
      res.end();
    }
  }).catch((error) => {
    console.log(error, 'error');
  })
})

app.post('/checkUserDetails', function(req, res){
  console.log("Got a POST request for checkUserDetails", req.body);
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  }).then((userFromRepo) => {
    if (userFromRepo) {
      res.statusCode = 202;
      res.json({
        status: 202,
        message: 'User Exists',
      });
      res.end();
    } else {
      res.statusCode = 202;
      res.json({
        status: 202,
        message: 'No User',
      });
    }
  }).catch((error) => {
    console.log(error, 'error');
  })
})

app.post('/insertDetails', function (req, res) {
  console.log("Got a POST request for the homepage", req.body);

  console.log("Userdasd", User);
  User.create({
    name: req.body.personName,
    age: req.body.age,
  }).then((userFromRepo) => {
    console.log("userFromRepo", userFromRepo);
    if (userFromRepo) {
      console.log("GostatusCode", req.statusCode);
      res.statusCode = 202;
      res.json({
        status: 202,
        message: 'User Entered Successfully',
      });
      res.end();
    }
  }).catch((error) => {
    console.log(error, 'error');
  })
  // res.send('UserdasdUserdasd')
  // res.end();
})

app.post('/user/search', function (req, res, next) {
  console.log("Got a POST request for the searchpage", req.body);

  let id = req.body.id;

  client.hgetall(id, function (err, obj) {
    if (!obj) {
      console.log('User does not exist');
      res.statusCode = 202;
      res.json({
        status: 202,
        message: 'User does not exist',
      });
      res.end();
    } else {
      res.statusCode = 200;
      console.log('User exists');
      res.json({
        status: 200,
        message: 'User Exists',
      });
      res.end();
    }
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));