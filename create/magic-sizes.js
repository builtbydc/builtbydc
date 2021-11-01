const magicSizeScale = 4.0 / 7;
function loadMagicSizes() {
    document.getElementById("magic-sizes").innerHTML = build([

        magicSize("height", "page-header", "", 18),
        magicSize("font-size", "", "header-text", 14),
        magicSize("font-size", "", "link", 8),
        magicSize("height", "", "link-container", 10),
        magicSize("height", "", "new-line", 5),
        magicSize("width", "", "mobile-background", 100)
        
    ])
}