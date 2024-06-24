const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const PORT_NUMBER = process.env.PORT

app.use(express.static('public'));

app.get('/', (req, res) =>
{
	res.render('index.ejs');
});

app.listen(PORT_NUMBER, '0.0.0.0',()=>
{
	console.log('listening to port ', {PORT_NUMBER});
});
