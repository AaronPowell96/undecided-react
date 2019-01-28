"use strict";

console.log("App.js msg");

var object = {
    title: "title",
    subtitle: "subtitle",
    options: ["one", "two"]
};
var title = object.title,
    subtitle = object.subtitle,
    options = object.options;


var getOptions = function getOptions(object) {
    return object.options.length > 0 ? "Here are your options: " + object.options : "No Options";
};
console.log(object.options);

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " ",
        title,
        " "
    ),
    subtitle && React.createElement(
        "p",
        null,
        subtitle
    ),
    React.createElement(
        "p",
        null,
        getOptions(object)
    )
);

var username = "Bob";
var userAge = 25;
var userLocation = "kent";
var user = {
    name: "bob",
    age: 23,
    userLocation2: "lol"
};
var name = user.name,
    age = user.age,
    userLocation2 = user.userLocation2;


var getLocation = function getLocation(location) {
    return location ? React.createElement(
        "p",
        null,
        "Location: ",
        userLocation2
    ) : undefined;
};

var newTemp = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? name : "Anon"
    ),
    age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        age
    ),
    getLocation(userLocation2)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
