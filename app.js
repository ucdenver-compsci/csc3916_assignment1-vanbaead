var express = require('express');
var bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.text({
    type: function(req) {
        return 'text';
    }
}));

server.post("/", (req, res)=>{
    console.log('Got: ' + req.body);
    res = res.status(200);
    var contentType = req.get('Content-Type');
    if (contentType) {
        console.log("Content Type: " + contentType);
        res = res.type(contentType);
    }
    res.send(req.body);
});

server.listen(process.env.PORT || 8080);

module.exports = server;

