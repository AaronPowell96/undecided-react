console.log("App.js msg");

const object = {
    title: "title",
    subtitle: "subtitle",
    options: ["one", "two"],
}
const { title, subtitle, options } = object

const getOptions = (object) => object.options.length > 0 ? `Here are your options: ${object.options}` : `No Options`;
console.log(object.options);

const template = (
    <div>
        <h1> {title} </h1>
        {subtitle && <p>{subtitle}</p>}
        <p>{getOptions(object)}</p>
    </div>
);

const username = "Bob"
const userAge = 25
const userLocation = "kent"
const user = {
    name: "bob",
    age: 23,
    userLocation2: "lol",
}
const { name, age, userLocation2 } = user

const getLocation = (location) => location ? <p>Location: {userLocation2}</p> : undefined;

const newTemp = (
    <div>
        <h1>{user.name ? name : "Anon"}</h1>
        {age >= 18 && <p>Age: {age}</p>
        }
        {getLocation(userLocation2)}
    </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

