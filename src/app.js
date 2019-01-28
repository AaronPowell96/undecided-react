console.log("App.js msg");

let object = {
    title: "title",
    subtitle: "subtitle"
}
let { title, subtitle } = object
let template = (
    <div>
        <h1> {title} </h1>
        <p>{subtitle}</p>
    </div>
);

const username = "Bob"
const userAge = 25
const userLocation = "kent"
let user = {
    name: "Andrew",
    age: 20,
    userLocation2: "lol",
}
let { name, age, userLocation2 } = user

let getLocation = (location) => location ? <p>Location: {userLocation2}</p> : undefined;

const newTemp = (
    <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        {getLocation(userLocation2)}
    </div>
);
let appRoot = document.getElementById("app");

ReactDOM.render(newTemp, appRoot);

