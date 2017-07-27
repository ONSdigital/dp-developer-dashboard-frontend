interface Alert {
    title: string,
    description: string,
    date: Date,
    error?: string
}

interface Notification {
    title: string,
    description: string,
    date: Date,
    type: string,
    error?: string
}