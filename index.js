const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });


app.get('/', (req,res)=>{
    res.send('Application is running in the backend. ')
})
app.use('/restakers', require('./routes/restakers'));
