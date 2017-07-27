import { Alert, Notification } from "../models";

export interface Action {
    type: string,
    payload?: (Alert | Notification)
}

export const ADD_ALERT: string = "ADD_ALERT";
export const REMOVE_ALERT: string = "REMOVE_ALERT";

export function addAlert(payload: Alert): Action {
    return {
        type: ADD_ALERT,
        payload: payload
    }
}

export function removeAlert(payload: Alert): Action {
    return {
        type: ADD_ALERT,
        payload: payload
    }
}