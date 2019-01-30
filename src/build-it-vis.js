

const appRoot = document.getElementById("app");
const onToggle = () => {
    visibility = !visibility
    renderElements();
}

let visibility = false;

const renderElements = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggle} >{visibility ? "Hide Details" : "Show Details"}</button>
            {visibility && (
                <div>
                    <p> Details here </p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderElements();