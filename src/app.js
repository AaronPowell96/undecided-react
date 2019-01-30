class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Can't decide? Computerise.."
        let options = ["1", "2", "g"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Options options={options} />
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
    handleRemoveAll() {
        alert("Remove all")
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
    render() {
        return (
            <div>
                <h1>Add Option here</h1>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.querySelector("#app"));
