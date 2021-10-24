function headerText() {
    const myName = "C";
    const splitName = myName.split("");

    let out = "";

    for (let i = 0; i < splitName.length; i++) {
        out += Span(splitName[i], "color" + ((i % 7) % 3));
    }

    return out;
}