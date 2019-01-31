class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }


    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return `Enter a valid value to add item. You added ${option}`
        } else if (this.state.options.indexOf(option) > -1) {
            return `This option already exists`
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))

    }
    render() {
        const subtitle = "Can't decide? Computerise.."
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />

                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision"
}

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}>
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            {
                props.options.map((option) => {
                    return <Option key={option} optionText={option} />
                })
            }
            <Option />
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    )
}
class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.optionName.value.trim()
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error: error }));
        e.target.elements.optionName.value = "";

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="optionName" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp options={[1, 2, 3, 4]} />, document.querySelector("#app"));
