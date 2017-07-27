import * as React from "react";
import { Component } from "react";

interface Props {
    text: string
}

interface State {
    time: string
}

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            time: ""
        }
    }

    componentWillMount() {
        setInterval(() => {
            const date: Date = new Date();
            this.setState({
                time: (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
            });
        }, 100);
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <p>{this.props.text}</p>
                <p>{this.state.time}</p>
            </div>
        );
    }
}