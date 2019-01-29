"use strict";

console.log("App.js msg");

var app = {
    title: "title",
    subtitle: "subtitle",
    options: []
};
var title = app.title,
    subtitle = app.subtitle,
    options = app.options;


var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderElements();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderElements();
};

var optionsList = function optionsList() {
    app.options.map(function (option) {
        return React.createElement(
            "li",
            { key: option },
            option
        );
    });
};
var appRoot = document.getElementById("app");

var renderElements = function renderElements() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            title
        ),
        subtitle && React.createElement(
            "p",
            null,
            subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options:" : "No Options"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderElements();
