var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req,res) => {
  res.render(__dirname + '/view.html')
})

//---------------------Listen 3000------------------------------------------
app.listen(3000);
console.log("Running at Port 3000");