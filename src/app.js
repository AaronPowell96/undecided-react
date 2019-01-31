class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [1, 2, 4, 5]
        }
    }

    render() {
        const title = "Indecision";
        const subtitle = "Can't decide? Computerise.."
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Options options={this.state.options} />
                <AddOption />
                <Action />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}


class Action extends React.Component {
    handlePick() {
        alert("Handle Pick")
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        alert(this.props.options)
    }
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option} />
                    })
                }
                <Option />
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}
class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.optionName.value.trim()
        option ? alert(option) : undefined
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="optionName" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.querySelector("#app"));
