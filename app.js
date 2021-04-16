const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const jobRouter = require('./routes/jobSpecRoutes');
const contactRouter = require('./routes/contactRoutes');
const userRouter = require('./routes/userRoutes');
const applicantRouter = require('./routes/applicantRoutes');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success!',
    message: 'app is working start coding!',
  });
});

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/contacts', contactRouter);
app.use('/api/v1/candidates', applicantRouter);

module.exports = app;
