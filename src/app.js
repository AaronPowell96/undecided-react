console.log("App.js msg");

const app = {
    title: "title",
    subtitle: "subtitle",
    options: ["one", "two"],
}

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log(count);
}
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log(count);
}
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log(count);
}

const appRoot = document.getElementById("app");

const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne}>Add 1</button>
            <button onClick={minusOne}>Minus 1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}
renderCounterApp();