const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')
const exhbs = require('express-handlebars')

const app = express();

//View Engine
app.engine('handlebard', exphbs({ extname: "hbs", defaultLayout: false, layoutsDir: "views/ " }));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.send("Node.js 2 way authnetication");
});

//defining port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app is live at ${PORT}`);
})