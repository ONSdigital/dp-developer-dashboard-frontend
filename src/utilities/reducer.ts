import { Alert, Notification } from "../models";
import { Action, ADD_ALERT, REMOVE_ALERT } from '../utilities/actions';

interface State {
    alerts: Alert[],
    notifications: Notification[]
}

const initialState: State = {
    alerts: [],
    notifications: []
}

export default function reducer(state: State = initialState, action: Action): State {
    switch(action.type) {
        case(ADD_ALERT): {
            return {
                ...state, 
                alerts : [
                    ...state.alerts,
                    action.payload
                ]
            }
        }
        case(REMOVE_ALERT): {
            return {
                ...state, 
                alerts : [
                    ...state.alerts.filter((alert: Alert): boolean => {
                        return alert.date !== action.payload.date
                    })
                ]
            }
        }
        default: {
            return state;
        }
    }
}