function Structure() {
    return build([
        Div("", "", "background"),

        Header(
            H(1, headerText(), "header-text"),
            "contents-centered"
        ),

        Div(
            build([
                link("https://github.com/builtbydc", "My Github"),
                link("https://happyplace.carlson.page", "HappyPlace"),
                link("https://framework.carlson.page", "Testing Area")
            ]),
            "contents-centered",
            "my-links"
        )
    ]);
}