module.exports = function multiply(first, second) {
  var product = (+first * +second).toFixed(0);
  //product = product.toFixed();
  return ("" + product);
}
