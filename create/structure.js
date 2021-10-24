const pageTitle = "Example Page";
const songURL = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +
    "1147143079%3Fsecret_token%3Ds-ONkbQu9GkHs&color=%23c792df&auto_play=false&hide_related=false&" +
    "show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"

function loadPage() {
    document.getElementById("page-title").innerHTML = pageTitle;
    document.getElementById("contents").innerHTML = Structure();
}

function Structure() {
    return build([
        Div("", "", "background"),
        Header(H(1, headerText(), "NO_DIV", "header-text")),
        '<iframe id="aliens3-frame" width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src=' + ttL(songURL) + '></iframe>',
    ]);
}