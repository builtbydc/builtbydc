function Structure() {
    return build([
        Div("", "", "background"),
        Header(H(1, headerText(), "NO_DIV", "header-text")),
        Iframe(songURL, "", "Aliens Demo 3 Music Player", "100%", "20", "NO_DIV", "music-player", "aliens3-frame")
    ]);
}