const express = require('express');
const app = express();
const port = 3400;


class Response {
    status = true;
    message = null;
    data = null;
    constructor() {
        // super()
    }
    getResponse(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
        return { status: status, message: message, data: data };
    }
}
const response = new Response();
app.get('/media', function (req, res) {
    let data = {
        podcasts: [{
            "description": "some text",
            "id": 574,
            "title": "Why long-term value is a winning bet",
            "media": "podcast",
            "publishedDate": "2018-12-19T18:00:00.000Z",
            "isLive": true,
            "isDeleted": false,
            "link": "https://podcasts.com/574",
            "createdAt": "2018-12-20T06:30:00.618Z",
            "updatedAt": "2019-01-31T06:30:00.864Z"
        }],
        total: 1
    };
    let message = "fetch details success fully";
    let status = true;
    res.send(response.getResponse(status, message, data));
});
app.listen(port, function () {
    console.log("\nServer is running on port " + port);
});
module.exports = app; // for testing
