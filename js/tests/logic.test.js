const test = require("tape");
const logic = require("../logic.js");
const secret = require("../secret.js");

test("tape is working", function (t) {
    t.equals(1, 1, "one equals one");
    t.end();
});

test("URL should be generated correctly", function (t) {
   console.log(logic);
    let actual = logic.buildUrl('obama','news');
    let expected = 'https://content.guardianapis.com/search?q=obama&api-key=' + secret.newsKey;
    t.equals(actual, expected, "obama searched on guardian");
    t.end();
});
