module.exports = function multiply(first, second) {
  var arrFirst = [];
  var arrSecond = [];
  var arrResult = [];
  var arrProduct = [];
  var overflow = 0;
  var overflowResult = 0;
  if (+first > +second) {
  	arrFirst = second.split('');
  	arrSecond = first.split('');
  }
  else {
  	arrFirst = first.split('');
  	arrSecond = second.split('');
  }
  for (var i = arrFirst.length - 1; i >= 0; i--) {
  	overflow = 0;
  	arrProduct = [];
  	for (var j = arrSecond.length - 1; j >= 0; j--) {
  		var product = arrFirst[i] * arrSecond[j];
  		if ((product + overflow) > 9) {
  			if ((product % 10 + overflow) > 9) {
  				arrProduct.unshift((product % 10 + overflow) % 10);
  				overflow = Math.floor(product / 10) + 1;
  			}
  			else {
  				arrProduct.unshift(product % 10 + overflow);
  				overflow = Math.floor(product / 10);
  			}
  		}
  		else {
  			arrProduct.unshift(product + overflow); 
  			overflow = 0;
  		}
  		if (j === 0 && overflow !== 0) {
   			arrProduct.unshift(overflow);
   		}
   	}
   	overflowResult = 0;
   	for (var g = arrProduct.length - 2; g >= 0; g--) {
   		if (arrResult[g] === undefined) {
   			arrResult[g] = 0;
   		}
   		if ((arrResult[g] + arrProduct[g+1] + overflowResult) > 9) {
   			arrResult[g] = (arrResult[g] + arrProduct[g+1] + overflowResult) % 10;
   			overflowResult = 1;
   		}
   		else if (overflowResult === 1) {
   			arrResult[g] = arrResult[g] + arrProduct[g+1] + overflowResult;
   			overflowResult = 0;
   		}
   		else {
   			arrResult[g] = arrResult[g] + arrProduct[g+1] + overflowResult;
   		}
   	}
   	arrResult.unshift(arrProduct[0] + overflowResult);
  }
  return arrResult.join('');
}
