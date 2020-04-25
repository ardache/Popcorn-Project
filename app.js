require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');

//now on netlify !!!!
mongoose
  .connect(process.env.MONGO_ID, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`::: All Set! Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'https://smartbackpopcorn.herokuapp.com');
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers",'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(
  cors({
    credentials: true,
    origin: [process.env.URL_CLIENT] // <== this will be the URL of our React app (it will be running on port 3000)
  })
);

// default value for title local
app.locals.title = 'BackEnd - Popcorn';



const index = require('./routes/index');
const questionsRoutes = require('./routes/question-routes');
const answerRoutes = require('./routes/answer-routes');
const priceRoutes = require('./routes/price-routes');
const branchRoutes = require('./routes/branch-routes');
app.use('/', branchRoutes);
app.use('/', questionsRoutes);
app.use('/', answerRoutes);
app.use('/', priceRoutes);


app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
