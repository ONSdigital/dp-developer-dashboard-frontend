import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";

import { Alert, Notification } from "./utilities/models";
import { addAlert } from './utilities/actions';
import AlertComponent from "./components/alert/alert";
import NotificationComponent from "./components/notification/notification";

export interface AppProps {
    notifications: Notification[],
    alerts: Alert[],
    dispatch: Function
}

interface State {
    alerts: Alert[],
    notifications: Notification[]
}

class App extends Component<AppProps, State> {
    constructor(props: AppProps) {
        super(props);
    }

    componentWillMount() {
        const newAlert: Alert = {
            title: "Meh",
            description: "Descripty",
            date: Date.now()
        }
        this.props.dispatch(addAlert(newAlert));
    }

    render() {
        const alerts: Alert[] = this.props.alerts || [];
        const notifications: Notification[] = this.props.notifications || [];
        return (
            <div>
                {alerts.map((alert: Alert, index: number) => {
                    return (<AlertComponent id={index} {...alert}/>)
                }) }

                {notifications.map((notification: Notification, index: number) => {
                    return (<NotificationComponent id={index} {...notification}/>)
                }) }
            </div>
        );
    }
}

function mapStateToProps(state: any, componentsProps?: AppProps) {
  return {
      alerts: state.alerts
  };
}

export default connect(mapStateToProps)(App);