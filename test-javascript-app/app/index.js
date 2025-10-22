const express = require('express');
const utils = require('./utils');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from Whanos!',
        sum: utils.add(10, 5),
        product: utils.multiply(10, 5)
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});