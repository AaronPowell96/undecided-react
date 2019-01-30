class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Can't decide? Computerise..</h2>
            </div>
        )
    }
}


class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h1>Options here</h1>
            </div>
        );
    }
}
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Option here</h1>
            </div>
        )
    }
}
const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.querySelector("#app"));
