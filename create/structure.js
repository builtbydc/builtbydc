function Structure() {
    return build([
        Div("", "", "background"),

        Header(
            H(1, headerText(), "header-text"),
            "contents-centered"
        ),

        Div(build([
            A("https://github.com/builtbydc", "_blank", "My Github", "link", "", "link-container"),
            A("https://happyplace.carlson.page", "_blank", "HappyPlace", "link", "", "link-container"),
            A("https://framework.carlson.page", "_blank", "Framework Testing Area", "link", "", "link-container")
        ]),
            "contents-centered",
            "my-links"
        )
    ]);
}