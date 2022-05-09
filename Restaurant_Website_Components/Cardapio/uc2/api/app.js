var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cors = require('cors');

// adicione "ponteiro" para o MongoDB
mongoose.connect('mongodb://mongo:27017/foodItemsDB', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});

var foodItemsSchema = require('../models/foodItemsSchema');
const foodItemModel = mongoose.model('foodItem', foodItemsSchema);

var pedidoSchema = require('../models/pedidoSchema');
const pedidoItemModel = mongoose.model('pedidoItem', pedidoSchema);

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../dist')));

var router = express.Router();
app.use('/', router);   // deve vir depois de app.use(bodyParser...

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// alguns navegadores enviam uma requisicao OPTIONS antes de POST e PUT
router.route('/*') 
 .options(function(req, res) {  // OPTIONS
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Request-With');
   res.sendStatus(200);
   }
 );

 // pagina principal do cardapio
 router.route('/home')
 .get(function(req, res) {  // GET
   res.sendFile(path.join(__dirname, '../dist/index.html'))
 });

// pagina principal do cardapio
router.route('/about')
.get(function(req, res) {  // GET
  res.sendFile(path.join(__dirname, './views/pedido_placeholder.html'))
});

// pagina principal do cardapio
router.route('/cardapio')
.get(function(req, res) {  // GET
  var response = {};
  foodItemModel.find({}, function(erro, data) {
    if(erro) 
       response = {"resultado": "falha de acesso ao BD"};
     else
       response = {"foodItems": data};
     res.json(response);
  })
});

// POST do pedido
router.route('/pedidopost')
.post(function(req, res) {   // POST (cria)
  var query = {"cliente": req.body.cliente};
  var response = {};
  pedidoItemModel.findOne(query, function(erro, data) {
     if (data == null) {
        console.log("here");
        var pedidoItem = new pedidoItemModel({
          cliente : req.body.cliente,
          pratos : req.body.pratos
        });
        pedidoItem.save(function(erro) {
          if(erro) response = {"resultado": "falha de acesso ao BD"};
          else response = {"resultado": "pedido inserido"};
          res.json(response);
        });
     } 
     else {
         response = {"resultado": "pedido ja existe"};
         res.json(response);
       }
     }
   )
 }
);




module.exports = app;