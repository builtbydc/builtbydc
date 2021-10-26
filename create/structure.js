function Structure() {
    return build([
        Div("", "", "background"),

        Header(H(1, headerText(), "NO_DIV", "header-text")),
    ]);
}