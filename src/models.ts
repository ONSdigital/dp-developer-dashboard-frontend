export interface Alert {
    title: string,
    description: string,
    date: number,
    error?: string
}

export interface Notification {
    title: string,
    description: string,
    date: number,
    type: string,
    error?: string
}