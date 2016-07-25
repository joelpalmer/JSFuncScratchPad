//converting book's map and reduce example from underscore to es5+... 
//Fogus, Michael (2013-06-01). Functional JavaScript: Introducing Functional //Programming with Underscore.js (p. 18). O'Reilly Media. Kindle Edition. 

var peopleTable =
    lameCSV(" name, age, hair\nMerble, 35, red\nBob, 64, blonde");

//underscore
function lameCSV(str) {
    return _.reduce(str.split("\n"),
        function (table, row) {
            table.push(_.map(row.split(","),
                function (c) {
                    return c.trim()
                }));
            return table;
        }, []);
};

console.table(peopleTable);
var sortedPeopleTable = _.rest(peopleTable).sort();
console.log("Sorted People table: " + sortedPeopleTable);


var peopleTable2 =
    es5LameCSV(" name, age, hair\nMerble, 35, red\nBob, 64, blonde");
//es5

function es5LameCSV(str) {
    return str.split("\n").reduce(
        function (table, row) {
            table.push(row.split(",").map(
                function (c) {
                    return c.trim()
                }));
            return table;
        }, []);
};

console.table(peopleTable2);
