var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usersRouter = require('./routes/users');
var all_listRouter = require('./routes/alllist');
var select_listRouter = require('./routes/select');
var insert_listRouter = require('./routes/insert');
var report_Router=require('./routes/report');
var show_communityRouter = require('./routes/community');
var insert_communityRouter = require('./routes/community_insert');
var community_commentRouter = require('./routes/community_comment');
var community_comment_insertRouter = require('./routes/community_comment_insert');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/users', usersRouter);
app.use('/all', all_listRouter);
app.use('/select', select_listRouter);
app.use('/insert', insert_listRouter);
app.use('/report', report_Router);
app.use('/community/show', show_communityRouter);
app.use('/community/insert', insert_communityRouter);
app.use('/community/comment', community_commentRouter);
app.use('/community/commentinsert', community_comment_insertRouter);






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
