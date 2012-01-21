
var gm = require('gm')
  , connect = require('connect')
  , port = process.env.PORT || 8900

connect(
    connect.logger()
  , connect.query()
  , handler
  , connect.errorHandler()
).listen(port);
console.error('listening on http://localhost:' + port);

var ops = require('./ops');

function handler (req, res, next) {
  var op = req.query.op;
  if ('string' !== typeof op) op = '';
  op = op.trim();
  console.log('trying method %s', op);

  var fn = ops[op];
  console.log('fn?', !!fn);

  if (!fn) return next();

  fn(req, res, next);
}
