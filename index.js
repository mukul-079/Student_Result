const express = require('express')
//var jsonServer = require('json-server');
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./backend/routes/routes')
var path=require("path")


app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use((req,res,next) => {
    next();
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Expose-Headers", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Accept-Language", "*");
    next();
});
app.use('/api', routes)

// app.use('/json', (req, res) => {
//     res.header("Content-Type",'application/json');
//     res.sendFile(path.join(__dirname, 'db.json'));
// })

app.listen(port, () => console.log(`Express Server listening at http://localhost:${port}`))

