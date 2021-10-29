//parse undefined
function pu(text) {
    if (text === undefined) text = "";
    return text;
}
//concatenate array of strings
function build(arr) {
    let out = "";
    for (var i = 0; i < arr.length; i++)
        out += arr[i];
    return out;
}
//space, open tag, close tag
function sp() {
    return " ";
}
function op(tag, attributes) {
    return "<" + tag + sp() + attributes + ">";
}
function opNA(tag) {
    return "<" + tag + ">";
}
function cl(tag) {
    return "</" + tag + ">";
}
//text transfer
function ttL(text) {
    return '"' + text + '"';
}
function ttE(ttE_a, ttE_b, text) {
    if (ttE_a === ttE_b) return text;
    else return "";
}
function ttNE(ttNE_a, ttNE_b, text) {
    if (ttNE_a !== ttNE_b) return text;
    else return "";
}
function ttF(functionName, functionParameters) {
    let out = functionName + "(";
    if (pu(functionParameters) !== "") {
        for (let i = 0; i < functionParameters.length; i++) {
            if (i !== 0) out += ", ";
            out += functionParameters[i];
        }
    }
    out += ");";
    return ttL(out);
}
function onClick(functionName, functionParameters) {
    return "onclick=" + ttF(functionName, functionParameters);
}
//write attribute
function wa(attr, text) {
    return attr + "=" + ttL(text) + sp();
}
function waE(waE_a, waE_b, attr, text) {
    if (waE_a === waE_b) return wa(attr, text);
    else return "";
}
function waNE(waNE_a, waNE_b, attr, text) {
    if (waNE_a !== waNE_b) return wa(attr, text);
    else return "";
}

function Div(contents, className, id, other) {
    className = pu(className); id = pu(id);
    return (
        op("div",
            waNE(id, "", "id", id) +
            waNE(className, "", "class", className) +
            pu(other)

        ) + pu(contents) + cl("div")
    );
}
function Header(contents, className, id, other) {
    className = pu(className); id = pu(id);
    return (
        op("header",
            waNE(id, "", "id", id) +
            waNE(className, "", "class", className) +
            pu(other)

        ) + pu(contents) + cl("header")
    );
}
function Section(contents, className, id, other) {
    className = pu(className); id = pu(id);
    return (
        op("section",
            waNE(id, "", "id", id) +
            waNE(className, "", "class", className) +
            pu(other)

        ) + pu(contents) + cl("section")
    );
}
function A(href, target, contents, className, id, divClassName, other) {
    id = pu(id); other = pu(other);

    if (divClassName === "NO_DIV") {
        className = pu(className);

        return (
            op("a",
                wa("href", href) +
                waNE(target, "download", "target", target) +
                waNE(id, "", "id", id) +
                waNE(className, "", "class", className) +
                other +
                ttE(target, "download", "download")

            ) + contents + cl("a")
        );

    } else {
        divClassName = pu(divClassName);

        return (Div(
            A(href, target, contents, className, id, "NO_DIV", other),
            divClassName)
        );

    }
}
function H(size, text, className, id, divClassName, other) {
    id = pu(id); other = pu(other);

    if (divClassName === "NO_DIV") {
        className = pu(className);

        return (
            op("h" + size,
                waNE(id, "", "id", id) +
                waNE(className, "", "class", className) +
                other

            ) + text + cl("h" + size)
        );

    } else {
        divClassName = pu(divClassName);

        return (Div(
            H(size, text, className, id, "NO_DIV", other),
            divClassName)
        );

    }
}
function Img(src, alt, width, height, className, id, divClassName, other) {
    id = pu(id); other = pu(other);

    if (divClassName === "NO_DIV") {
        className = pu(className);

        return (
            op("img",
                wa("src", src) +
                wa("alt", alt) +
                wa("width", width) +
                wa("height", height) +
                waNE(id, "", "id", id) +
                waNE(className, "", "class", className) +
                other

            )
        );

    } else {
        divClassName = pu(divClassName);

        return (Div(
            Img(src, alt, width, height, className, id, "NO_DIV", other),
            divClassName)
        );

    }
}
function P(text, className, id, divClassName, other) {
    id = pu(id); other = pu(other);

    if (divClassName === "NO_DIV") {
        className = pu(className);

        return (
            op("p",
                //attributes
                waNE(id, "", "id", id) +
                waNE(className, "", "class", className) +
                other

            ) + text + cl("p")
        );

    } else {
        divClassName = pu(divClassName);

        return (Div(
            P(text, className, id, "NO_DIV", other),
            divClassName)
        );

    }
}
function Button(contents, className, id, divClassName, other) {
    id = pu(id); other = pu(other);

    if (divClassName === "NO_DIV") {
        className = pu(className);

        return (
            op("button",
                wa("type", "button") +
                waNE(id, "", "id", id) +
                waNE(className, "", "class", className) +
                other

            ) + contents + cl("button")
        );

    } else {
        divClassName = pu(divClassName);

        return (Div(
            Button(contents, className, id, "NO_DIV", other),
            divClassName)
        );

    }
}
function B(contents) {
    return opNA("b") + contents + cl("b");
}
function Span(contents, className, id, other) {
    className = pu(className); id = pu(id);
    return op("span",
        waNE(id, "", "id", id) +
        waNE(className, "", "class", className) +
        pu(other)

    ) + contents + cl("span");
}
function Iframe(src, srcdoc, title, width, height, className, id, divClassName, name, allow, sandbox, referrerpolicy, other) {
    id = pu(id); name = pu(name); allow = pu(allow); sandbox = pu(sandbox); referrerpolicy = pu(referrerpolicy); other = pu(other);

    if (divClassName === "NO_DIV") {
        className = pu(className);

        return (
            op("iframe",
                wa("src", src) +
                waNE(srcdoc, "", "srcdoc", srcdoc) +
                wa("title", title) +
                wa("width", width) +
                wa("height", height) +
                waNE(id, "", "id", id) +
                waNE(className, "", "class", className) +
                waNE(name, "", "name", name) +
                waNE(allow, "", "allow", allow) +
                waNE(sandbox, "", "sandbox", sandbox) +
                waNE(referrerpolicy, "", "referrerpolicy", referrerpolicy) +
                pu(other)

            ) + cl("iframe")
        );
    } else {
        divClassName = pu(divClassName);

        return (Div(
            Iframe(src, srcdoc, title, width, height, className, id, "NO_DIV", name, allow, sandbox, referrerpolicy, other),
            divClassName)
        );
    }
}

function magicSize(type, id, className, m_vw) {
    let d_vh = m_vw * magicSizeScale;
    let m = m_vw / 100.0;
    let d = d_vh / 100.0;

    let k = m * window.innerWidth - d * window.innerHeight;
    let correction = k * (100 - (window.innerWidth - 768)) / 100;

    if (correction * k < 0) correction = 0;

    return build([
        className === "" ? "#" + id + " {" : "." + className + " {\n",
        "   " + type + ": " + m_vw + "vw;\n",
        "}\n",
        "@media only screen and (min-width: 768px) {\n",
        "   " + (className === "" ? "#" + id + " {\n" : "." + className + " {\n"),
        "       " + type + ": calc(" + d_vh + "vh + " + correction + "px);\n",
        "   }\n",
        "}\n",
    ]);
} window.onresize = loadMagicSizes;

class StateCycler {
    constructor(id, contents, className, states, index) {
        this.id = id;
        this.contents = pu(contents);

        this.className = "state-cycler";
        if (pu(className) !== "") this.className += " " + className;

        this.states = ["disabled", "enabled"]; this.index = 0;
        if (pu(states) !== "") this.states = states;
        if (pu(index) !== "") this.index = index;
    }

    create() {
        return Div(this.load(), "", this.id + "_container");
    }

    load() {
        return Button(
            this.contents, "NO_DIV",
            this.className + " state-" + this.states[this.index],
            this.id, onClick(this.id + "." + "handleClick")
        );
    }

    state() {
        return this.states[this.index];
    }

    cycle() {
        this.index++;
        this.index %= this.states.length;
        document.getElementById(this.id + "_container").innerHTML = this.load();
    }

    handleClick() {
        this.cycle(); this.action();
    }

    action() { }
}

const pageTitle = "Carlson";
const magicSizeScale = 4.0 / 7;

function loadPage() {
    document.getElementById("page-title").innerHTML = pageTitle;
    document.getElementById("contents").innerHTML = Structure();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }).catch(function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
    }

    loadMagicSizes();
    loadColorList();

}

function headerText() {
    const myName = "Daniel Carlson";
    const splitName = myName.split("");

    let out = "";

    let n = 0;
    for (let i = 0; i < splitName.length; i++) {
        out += Span(splitName[i], "color" + (9 - Math.abs(n - 9)));

        n++;
        if (splitName[i] === " ") n--;
    }

    return out;
}

function link(url, text) {
    return A(url, "_blank", text, "link", "", "flex-center");
}

const colorList = ["#fbf8cc", "#fde4cf", "#ffcfd2", "#f1c0e8", "#cfbaf0", "#a3c4f3", "#90dbf4", "#8eecf5", "#98f5e1", "#b9fbc0"]
function loadColorList() {
    let out = "";
    for (let i = 0; i < colorList.length; i++) {
        out += ".color" + i + " {\n\tcolor: " + colorList[i] + ";\n}\n"
    }
    document.getElementById("color-list").innerHTML = out;
}

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

