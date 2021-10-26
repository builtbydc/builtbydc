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