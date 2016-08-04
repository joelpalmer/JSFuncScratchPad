var baseballTeams = [{
    name: "Dodgers",
    league: "National",
    standing: "first"
}, {
    name: "Giants",
    league: "National",
    standing: "second"
}, {
    name: "Rangers",
    league: "American",
    standing: "third"
}];

var groupedByGenre = _.groupBy(baseballTeams, function(a){
    return a.league;
});

//let's do a groupBy that takes a key... and an object

const groupBy = (key, obj) =>  {
    return _.groupBy(obj, function(el){
        return el[key];
    })
}

console.log(groupBy("league", baseballTeams));
