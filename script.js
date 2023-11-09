function generateCodenames() {
    var wordsInput = document.getElementById("wordInput").value;
    var wordsArray = wordsInput.split(",").map(word => word.trim());

    if (wordsArray.length !== 16) {
        alert("Bitte gib genau 16 Wörter ein.");
        return;
    }

    var codenamesTable = document.getElementById("codenamesTable");
    codenamesTable.innerHTML = "";

    var index = 0;
    for (var i = 0; i < 4; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var word = wordsArray[index];
            var cell = document.createElement("td");
            cell.textContent = word;
            row.appendChild(cell);
            index++;
        }
        codenamesTable.appendChild(row);
    }

    applyRandomColors();
}

function applyRandomColors() {
    var cells = document.getElementsByTagName("td");
    var colorClasses = ["red", "blue", "black", "orange"];
    for (var i = 0; i < cells.length; i++) {
        var randomIndex = Math.floor(Math.random() * colorClasses.length);
        cells[i].classList.add(colorClasses[randomIndex]);
        colorClasses.splice(randomIndex, 1);
    }
}

function applyColors() {
    var redCount = parseInt(document.getElementById("redCount").value);
    var blueCount = parseInt(document.getElementById("blueCount").value);
    var blackCount = parseInt(document.getElementById("blackCount").value);
    var orangeCount = parseInt(document.getElementById("orangeCount").value);
    var totalFields = redCount + blueCount + blackCount + orangeCount;

    if (totalFields !== 16) {
        alert("Die Gesamtanzahl der ausgewählten Felder muss genau 16 ergeben.");
        return;
    }

    var colorClasses = [];
    for (var i = 0; i < redCount; i++) {
        colorClasses.push("red");
    }
    for (var i = 0; i < blueCount; i++) {
        colorClasses.push("blue");
    }
    for (var i = 0; i < blackCount; i++) {
        colorClasses.push("black");
    }
    for (var i = 0; i < orangeCount; i++) {
        colorClasses.push("orange");
    }

    var cells = document.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++) {
        if (colorClasses.length > 0) {
            var randomIndex = Math.floor(Math.random() * colorClasses.length);
            cells[i].classList.add(colorClasses[randomIndex]);
            colorClasses.splice(randomIndex, 1);
        }
    }
}
