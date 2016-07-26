var albums = [{
    title: "Sabbath Bloody Sabbath",
    genre: "Metal",
    rating: "Good"
}, {
    title: "Scientist",
    genre: "Dub",
    rating: "OK"
}, {
    title: "Undertow",
    genre: "Metal",
    rating: "OK"
}];

var groupedByGenre = _.groupBy(albums, function(a){
    return a.genre;
});

//let's do a groupBy that takes a key... and an object

const groupBy = (key, obj) =>  {
    return _.groupBy(obj, function(el){
        return el[key];
    })
}

console.log(groupBy("rating", albums));
