// api dependencies
const express = require('express');

// route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// express server to run the app
const app = express();

// server port
const PORT = process.env.PORT || 3001;

// encode data to string/array
app.use(express.urlencoded({ extended: true }));

// read and parse JSON files
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is active on port ${PORT}!`);
});
