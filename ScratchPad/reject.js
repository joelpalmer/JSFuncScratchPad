//custom
function reject(array, iteratorFunction) {
  var temp = array.filter(iteratorFunction);
        return array.filter( function( number ) {
        return ! temp.includes( number );
    } );
    
}

var numbers = [10, 20, 30];
var lessThan30 = reject(numbers, function(number){
         return number < 30;
         
         
    });

console.log(lessThan30);

//underscore

const rejectedNumbers = _.reject(numbers, (num)=> {
    return num < 20 ;
})
console.log(rejectedNumbers);