var img = __dirname + '/nodejs.png';

var resizeX = 343
  , resizeY = 257

var gm = require('gm').subclass({ imageMagick: true });


exports['resize'] = function (req, res, next) {
  var base =
  gm(img)
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}
exports['rotate'] = function (req, res, next) {
  var base =
  gm(img)
  .rotate('green', -25)
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}
exports['rotate-edge'] = function (req, res, next) {
  var base =
  gm(img)
  .rotate('green', -25)
  .edge(3)
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}

exports['flip-rotate-edge'] = function (req, res, next) {
  var base =
  gm(img)
  .flip()
  .rotate('green', -25)
  .edge(3)
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}

exports['blur'] = function (req, res, next) {
  var base =
  gm(img)
  .blur(30, 20)
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}

exports['implode'] = function (req, res, next) {
  var base =
  gm(img)
  .implode(-1.2)
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}

exports['contrast'] = function (req, res, next) {
  var base =
  gm(img)
  .contrast(-6)
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}
exports['colorize'] = function (req, res, next) {
  var base =
  gm(img)
  .colorize(200, 200, 256)
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}
exports['equalize'] = function (req, res, next) {
  var base =
  gm(img)
  .equalize()
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}
exports['swirl'] = function (req, res, next) {
  var base =
  gm(img)
  .resize(resizeX, resizeY)
  .region(101, 112, 90, 87)
  .swirl(200)
  .autoOrient();

  write(base, res, next);
}
exports['sepia']= function (req, res, next) {
  var base =
  gm(img)
  .sepia()
  .resize(resizeX, resizeY)
  .autoOrient();

  write(base, res, next);
}

function write (base, res, next) {
  base.stream('png', function (err, stdout, stderr) {
    if (err) return next(err);
    stdout.pipe(res);
  });
}
