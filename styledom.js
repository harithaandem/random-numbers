var x = [], i;
function myFunction() {
    rand();
    for (i = 0; i < 9; i++) {
        var para = document.createElement("div");
        var text = document.createTextNode(x[i]);
        var at = document.createAttribute("class");
        at.value = "item";
        var iden = document.createAttribute("id");
        iden.value = "id" + (i + 1);
        var event = document.createAttribute("onclick");
        event.value = "random(x[" + i + "])";
        para.appendChild(text);
        para.setAttributeNode(iden);
        para.setAttributeNode(at);
        para.setAttributeNode(event);
        document.getElementById("cont").appendChild(para);
    }
}
myFunction();
function ran() {
    var count = 0;
    while (count < 9) {
        var p = Math.floor((Math.random() * 10) + 1);
        if (count == 0) {
            x[count] = p;
            count++;
            continue;
        }
        for (var j = 0; j < count; j++) {
            if (p === x[j]) {
                break;
            }
        }
        if (j === count) {
            x[count] = p;
            count++;
        }
    }
}
function newgam() {
    rand();

    for (i = 0; i < 9; i++) {

        document.getElementById("id" + (i + 1)).textContent = x[i];
    }
}


function random(number) {
    var num = Math.floor((Math.random() * 10) - 1);
    if (number > x[num]) {
        alert("greater");
    }
    else if (number < x[num]) {
        alert("smaller");
    }
    else {
        alert("success");
    }
}
