import * as React from "react";
import { Component } from "react";

interface Props {
    id: number,
    title: string,
    description: string,
    date: number,
    error?: string
}

interface State {
    time: string
}

export default class Alert extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // this.state = {
        //     time: ""
        // }
    }

    render(): JSX.Element {
        return (
            <div className="alert">
                <h1 className="alert__title">{this.props.title}</h1>
                <p className="alert__description">{this.props.description}</p>
                <p className="alert__date">{this.props.date}</p>
            </div>
        );
    }
}
