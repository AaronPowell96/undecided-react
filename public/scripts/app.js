"use strict";

console.log("App.js msg");

var app = {
    title: "title",
    subtitle: "subtitle",
    options: ["one", "two"]
};

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
    console.log(count);
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
    console.log(count);
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
    console.log(count);
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {

    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count,
            " "
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "Add 1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "Minus 1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
