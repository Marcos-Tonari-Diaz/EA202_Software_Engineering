var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cors = require('cors');

// adicione "ponteiro" para o MongoDB
mongoose.connect('mongodb://mongo:27017/entregas', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected");
});

var entregaSchema = require('../models/entregaSchema');
const entregaItemModel = mongoose.model('entregaItem', entregaSchema);
var entregadorLoginSchema = require('../models/loginEntregador');
const entregadorLoginModel = mongoose.model('entregadorLogin', entregadorLoginSchema);


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

 // pagina principal de entrega
 router.route('/')
 .get(function(req, res) {  // GET
   res.sendFile(path.join(__dirname, '../dist/index.html'))
 }) 

 // acesso as entregas no BD
router.route('/entrega')
.get(function(req, res) {  // GET
  var response = {};
  entregaItemModel.find({}, function(erro, data) {
    if(erro) 
       response = {"resultado": "falha de acesso ao BD"};
    else
       response = data;
    res.json(response);
  })
})
.put(function(req, res) {   // PUT (altera)
  var response = {};
  var filter = {"numero_da_entrega": req.body.numero};
  var update = {};
  if ("status" in req.body){
    update = {"status": req.body.status};
  }
  if ("nome_entregador" in req.body){
    update = {"nome_entregador": req.body.nome_entregador};
  }
  entregaItemModel.findOneAndUpdate(filter, update, function(erro, data) {
      if (data == null) response = {"resultado": "entrega inexistente "};
      else response = {"resultado": "entrega atualizada"};
      res.json(response);  
  })
})

 // acesso as logins do entregador no BD
 router.route('/entregadorLogin')
 .get(function(req, res) {  // GET
   var response = {};
   entregadorLoginModel.find({}, function(erro, data) {
     if(erro) 
        response = {"resultado": "falha de acesso ao BD"};
     else
        response = data;
     res.json(response);
   })
 })

module.exports = app;