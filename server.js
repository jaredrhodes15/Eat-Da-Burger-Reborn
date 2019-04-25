var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine','handlebars');

var routes = require('./controllers/routes.js');
app.use('/',routes);

var port = 3000;
app.listen(port);



// app.use("/static", express.static("public"));

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(methodOverride('_method'));

// var exphbs = require('express-handlebars');

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// var routes = require('./controllers/burgers_controller.js');

// app.use('/', routes);

// app.listen(port);