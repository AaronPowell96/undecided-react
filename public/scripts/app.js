"use strict";

var appRoot = document.getElementById("app");
var onToggle = function onToggle() {
    visibility = !visibility;
    renderElements();
};

var visibility = false;

var renderElements = function renderElements() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onToggle },
            visibility ? "Hide Details" : "Show Details"
        ),
        visibility && React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                " Details here "
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderElements();
