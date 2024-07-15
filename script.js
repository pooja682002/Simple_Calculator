function buttonClick(val) {
    document.getElementById("screen").value += val;
}

function clearDisplay() {
    document.getElementById("screen").value = "";
}

function equalClick() {
    try {
        var text = document.getElementById("screen").value;
        if (text) {
            var result = eval(text);
            document.getElementById("screen").value = result;
        }
    } catch (e) {
        document.getElementById("screen").value = 'Error';
    }
}

