function Structure() {
    return build([
        Div(Div("", "mobile-background"), "desktop-background flex-center"),

        Header(
            H(1, headerText(), "header-text"),
            "flex-center", "page-header"
        ),

        Div(
            build([
                Div("", "new-line"),
                H(1, "Code:", "link"),
                link("https://github.com/builtbydc", "My Github"),
                link("https://happyplace.carlson.page", "HappyPlace"),
                link("https://framework.carlson.page", "Testing Area")
            ]),
            "flex-center",
            "my-links"
        )
    ]);
}