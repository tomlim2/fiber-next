export interface WidgetItem {
    name: string
    widgetUid: number | string
    type: string
    apiUrl: string
}

export interface Widgets {
    list: WidgetItem[]
    user: WidgetItem[]
}