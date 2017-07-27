import * as React from "react";
import { Component } from "react";
import { Alert, Notification } from "./models";
import AlertComponent from "./components/alert/alert";
import NotificationComponent from "./components/notification/notification";

interface Props {
    text?: string
}

interface State {
    alerts: Alert[],
    notifications: Notification[]
}

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            alerts: [
                {
                    title: "Test alert",
                    description: "this is a test alert",
                    date: Date.now()
                }
            ],
            notifications: [
                {
                    title: "Test notification",
                    description: "this is a test notification",
                    date: Date.now(),
                    type: "Deployment"
                }
            ]
        }
    }

    render(): JSX.Element {
        const alerts: Alert[] = this.state.alerts || [];
        const notifications: Notification[] = this.state.notifications || [];
        return (
            <div>
                {alerts.map((alert: Alert, index: number): JSX.Element => {
                    return (<AlertComponent id={index} {...alert}/>)
                }) }

                {notifications.map((notification: Notification, index: number): JSX.Element => {
                    return (<NotificationComponent id={index} {...notification}/>)
                }) }
            </div>
        );
    }
}