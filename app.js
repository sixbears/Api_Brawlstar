const methodOverride = require("method-override")

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const publicRouter = require('./routes/public');
const usersRouter = require('./routes/users');

const session = require('./utils/session')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'))
app.use(session.check)

/*  Public routes */

app.use('/', publicRouter);
app.use(session.redirect)

/*  Private routes */

app.use('/', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

  // Error's middlewares
app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {

  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  res.status(err.status || 500)
  res.format({

    text: () => {
      res.send(JSON.stringify("Error : " + err.message))
    },

    html: () => {
      res.render("error", {
        session: req.session,
        user: req.user
      })
    },

    json: () => {
      res.json({
        error: err.message
      })
    }
  })
})

module.exports = app;
