const express = require('express');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/employee-manager-front'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/employee-manager-front'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080); 