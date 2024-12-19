const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bondbase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    // Add other relevant fields
  });
  
  const Contact = mongoose.model('Contact', contactSchema);