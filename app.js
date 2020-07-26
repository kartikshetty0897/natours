const express = require('express');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// 3) ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't ${req.method} ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
