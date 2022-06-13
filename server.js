const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/angular-recipe'))
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+
        '/dist/angular-recipe/index.html')); });
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
}
app.listen(port);