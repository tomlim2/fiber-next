export interface InterfaceWidgetItem {
    name: string
    widgetUid: number | string
    type: string
    apiUrl: string
}

export interface InterfaceWidgets {
    list: InterfaceWidgetItem[]
    user: InterfaceWidgetItem[]
}

export interface InterfaceTodoDetail{
    task: string
    isCompleted: boolean
}

export interface InterfaceTodo{
    title: string
    to: string
    isCompleted: boolean
    details: InterfaceTodoDetail[]
}