//Install express server
const express = require('express');
// Requirement of path Module in order to manage URLS
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/employee-manager-frontend'));
app.get('/*', function(req,res) {
   res.sendFile(path.join(__dirname + '/dist/demployee-manager-frontend/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log(`Running on port ${process.env.PORT || 8080}`)