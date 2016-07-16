QUnit.test("Destructuring", function (assert) {

    assert.deepEqual(["package"], wrap("package"));
});

console.log(["package"]);
console.log(wrap("package"));