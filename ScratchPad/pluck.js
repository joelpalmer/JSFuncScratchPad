function pluck(array, property) {
    var temp = [];
    temp = array.map(function(item){
         return item[property];
         
         
    })
    
    return temp;
    
}

var cars = [{make: 'Ford', Model: 'Mustang'}, {make: 'Chevy', Model: 'Corvette'}];
var plucked = pluck(cars, 'Model');
console.log(plucked);