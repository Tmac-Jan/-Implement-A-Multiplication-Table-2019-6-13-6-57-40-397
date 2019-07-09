function isEachNumberFrom1To1000 (startNumber, endNumber) {
    if(startNumber>1&&startNumber<1000&&endNumber>1&&endNumber<1000){
    return true;
   }
   return false;
}
function isStartNumberSmallerThanEndNumber(startNumber,endNumber){
   return startNumber<=endNumber;
}
function printMultiplicationTable(startNumber,endNumber){
    if(isEachNumberFrom1To1000(startNumber,endNumber)&&isStartNumberSmallerThanEndNumber(startNumber,endNumber)){
        let resultString = getMultiplicationTableString(startNumber,endNumber);
        console.log(resultString);
    }
}
function getMultiplicationTableString(startNumber,endNumber){
      var resultString ='';
      for(var i=startNumber;i<=endNumber;i++){
             for(var j=1;j<=i;j++){
                resultString+=getEquationString(i,j);
                if(i==j){
                   resultString+='\n';
                }
             }
      }
}
function getEquationString(startMultiplier,endMultiplier){
      return startMultiplier+'*'+endMultiplier+'='+startMultiplier*endMultiplier+' ';
}
//module.exports = [isEachNumberFrom1To1000,isStartNumberSmallerThanEndNumber];
exports.isEachNumberFrom1To1000 = isEachNumberFrom1To1000
exports.isStartNumberSmallerThanEndNumber = isStartNumberSmallerThanEndNumber