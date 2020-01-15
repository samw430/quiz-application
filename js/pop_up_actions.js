document.getElementById('button').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "flex";
});
document.querySelector('.close').addEventListener("click", function () {
    document.querySelector('.bg-modal').style.display = "none";
});
document.getElementById('questionAddForm').addEventListener("submit", function () {
    var item = document.createElement("li");
    var header = document.createElement("p");
    item.appendChild(header);
    header.innerText = document.getElementById("name").value;
    var questionsList = document.getElementById("questions");
    questionsList.appendChild(item);
});
