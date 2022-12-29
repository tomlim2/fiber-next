export interface IWorkLogFlfi {
  name: string;
  description: string;
  type: string;
  tasks: string[];
  duration: string;
  advantures: string[];
  techStack: string[];
}

export interface InterfaceWidgetItem {
  name: string;
  widgetUid: number | string;
  type: string;
  apiUrl: string;
}

export interface InterfaceWidgets {
  list: InterfaceWidgetItem[];
  user: InterfaceWidgetItem[];
}

export interface InterfaceTodoDetail {
  task: string;
  isCompleted: boolean;
}

export interface InterfaceTodo {
  title: string;
  to: string;
  isCompleted: boolean;
  details: InterfaceTodoDetail[];
}
