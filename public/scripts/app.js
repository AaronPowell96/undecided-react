"use strict";

console.log("App.js msg");

var object = {
    title: "title",
    subtitle: "subtitle"
};
var title = object.title,
    subtitle = object.subtitle;

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
    React.createElement(
        "p",
        null,
        subtitle
    )
);

var username = "Bob";
var userAge = 25;
var userLocation = "kent";
var user = {
    name: "Andrew",
    age: 20,
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
        name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        age
    ),
    getLocation(userLocation2)
);
var appRoot = document.getElementById("app");

ReactDOM.render(newTemp, appRoot);
