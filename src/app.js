console.log("App.js msg");

const app = {
    title: "title",
    subtitle: "subtitle",
    options: [],
}
const { title, subtitle, options } = app;

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = "";
        renderElements();
    }
}

const removeAll = () => {
    app.options = [];
    renderElements();
}

const optionsList = () => {
    app.options.map((option) => {
        return <li key={option}>{option}</li>
    });
}
const appRoot = document.getElementById("app");

const renderElements = () => {
    const template = (
        <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
            <p>{app.options.length > 0 ? `Here are your options:` : "No Options"}</p>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <button onClick={removeAll} >Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderElements();