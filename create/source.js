function headerText() {
    const myName = "Daniel Carlson";
    const splitName = myName.split("");

    let out = "";

    let n = 0;
    for (let i = 0; i < splitName.length; i++) {
        out += Span(splitName[i], "color" + (9 - Math.abs(n - 9)));

        n++;
        if (splitName[i] === " ") n--;
    }

    return out;
}

function link(url, text) {
    return A(url, "_blank", text, "link", "", "flex-center");
}

const colorList = ["#fbf8cc", "#fde4cf", "#ffcfd2", "#f1c0e8", "#cfbaf0", "#a3c4f3", "#90dbf4", "#8eecf5", "#98f5e1", "#b9fbc0"]
function loadColorList() {
    let out = "";
    for (let i = 0; i < colorList.length; i++) {
        out += ".color" + i + " {\n\tcolor: " + colorList[i] + ";\n}\n"
    }
    document.getElementById("color-list").innerHTML = out;
}