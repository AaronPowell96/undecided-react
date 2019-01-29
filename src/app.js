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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const choice = app.options[randomNum];
    alert(choice);

}
const appRoot = document.getElementById("app");

const renderElements = () => {
    const template = (
        <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
            <p>{app.options.length > 0 ? `Here are your options:` : "No Options"}</p>
            <button disabled={app.options.length < 1} onClick={onMakeDecision}>What Should I do? </button>
            <button onClick={removeAll} >Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderElements();