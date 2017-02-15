function binarySearch (){
Array.prototype.toTwenty = function () {
 for (var i = 1; i <= 20; i++){
   this.push(i);
 }
 return this;
};
Array.prototype.toForty = function () {
 for (var i = 2; i <= 40; i+=2){
   this.push(i);
 }
 return this;
};
Array.prototype.toOneThousand = function () {
 for (var i = 10; i <= 1000; i+=10){
   this.push(i);
 }
 return this;
}
Array.prototype.search = function binarySearch(randomNumber) {
 var start = 0;
 var end = this.length -1;
 var answerObject = {count: 0, index: null, length: this.length};
 while(start <= end) {
   var mid = Math.floor((start + end) /2);
   if(this[end] === randomNumber) {
     answerObject.index = end;
     return answerObject;
   }
   else {
      end = end - 1;
   }
  if(this[start] === randomNumber) {
     answerObject.index = start;
     return answerObject;
   }
   else {
      start = start + 1;
   }
   if(this[mid] === randomNumber) {
     answerObject.index = mid;
     return answerObject;
   }
   else if (this[mid] > randomNumber) end = mid -1;
   else if (this[mid] < randomNumber) start = mid + 1;
    answerObject.count ++;
 }
  answerObject.index = -1;
  return answerObject;
}
};

module.exports = binarySearch;// export binarySearch