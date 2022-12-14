var createError = require('http-errors');
const bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// new shit
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// end new shit

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(sassMiddleware({
//   src: path.join(__dirname, '../dist/public'),
//   dest: path.join(__dirname, '../dist/public'),
//   indentedSyntax: true, // true = .sass and false = .scss
//   sourceMap: false
// }));

app.use(express.static(path.join(__dirname, '../dist/public')));
// app.use(express.static(staticUrl));

const urlRoot = process.env.EXPRESS_URL_ROOT || '/'

app.use(urlRoot, indexRouter)
app.use(urlRoot + 'contact', contactRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
