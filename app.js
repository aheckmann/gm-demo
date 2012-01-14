
var gm = require('gm')
  , connect = require('connect')

connect(
    connect.logger()
  , connect.query()
  , connect.bodyParser()
  , handler
  , connect.errorHandler({ showStack: true })
).listen(8900);
console.error('listening on http://localhost:8900');

var ops = require('./ops');

function handler (req, res, next) {
  var op = req.query.op;
  if ('string' !== typeof op) op = '';
  op = op.trim();
  console.error('trying method %s', op);

  var fn = ops[op];
  console.error('fn?', !!fn);

  if (!fn) return next();

  fn(req, res, next);
}
