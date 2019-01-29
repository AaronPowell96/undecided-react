console.log("App.js msg");

const app = {
    title: "title",
    subtitle: "subtitle",
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        options.push(option)
        e.target.elements.option.value = "";
    }
}
const appRoot = document.getElementById("app");
const { title, subtitle, options } = app
const template = (
    <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <p>{app.options.length > 0 ? `Here are your options: ${app.options}` : "No Options"}</p>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
);
ReactDOM.render(template, appRoot);