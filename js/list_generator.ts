  var strings = ["hello", "help", "please"];
  var questionsList = document.getElementById("questions");
  for(let word of strings){
    var item = document.createElement("li");
    var header = document.createElement("p");
    item.appendChild(header);
    header.innerText = word;
    questionsList.appendChild(item);
  }
 
 const sqlite3 = require('sqlite3').verbose();
 let db = new sqlite3.Database(':memory:');

 db.close();