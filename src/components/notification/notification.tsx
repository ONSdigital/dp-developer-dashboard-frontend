import * as React from "react";
import { Component } from "react";

interface Props {
    id: number,
    title: string,
    description: string,
    date: number,
    type: string,
    error?: string
}

interface State {
    time: string
}

export default class Notification extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // this.state = {
        //     time: ""
        // }
    }

    render() {
        return (
            <div className="notification">
                <h1 className="notification__title">{this.props.title}</h1>
                <p className="notification__description">{this.props.description}</p>
                <p className="notification__date">{this.props.date}</p>
                <p className="notification__type">{this.props.type}</p>
            </div>
        );
    }
}
