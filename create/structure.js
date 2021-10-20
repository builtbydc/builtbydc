const pageTitle = "Example Page";

function loadPage() {
    document.getElementById("page-title").innerHTML = pageTitle;
    document.getElementById("contents").innerHTML = Structure();
}

function Structure() {
    return build([
        Div("", "", "background"),
        Header(H(1, headerText(), "NO_DIV", "header-text"))
    ]);
}