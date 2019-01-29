"use strict";

console.log("App.js msg");

var app = {
    title: "title",
    subtitle: "subtitle",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        options.push(option);
        e.target.elements.option.value = "";
    }
};
var appRoot = document.getElementById("app");
var title = app.title,
    subtitle = app.subtitle,
    options = app.options;

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
        app.options.length > 0 ? "Here are your options: " + app.options : "No Options"
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
