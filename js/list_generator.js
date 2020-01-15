var strings = ["hello", "help", "please"];
var questionsList = document.getElementById("questions");
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var word = strings_1[_i];
    var item = document.createElement("li");
    var header = document.createElement("p");
    item.appendChild(header);
    header.innerText = word;
    questionsList.appendChild(item);
}
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
db.close();
