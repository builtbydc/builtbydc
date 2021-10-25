function Structure() {
    return build([
        Div("", "", "background"),
        Header(H(1, headerText(), "NO_DIV", "header-text")),
        '<iframe id="aliens3-frame" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src=' + ttL(songURL) + '></iframe>',
    ]);
}