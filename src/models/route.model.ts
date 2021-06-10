import { DashboardTwoTone } from "@ant-design/icons";

export class Route {
  public name: string;

  public route: string;

  public component: JSX.Element;

  public icon?: typeof DashboardTwoTone;

  public isMain?: boolean;

  public hidden?: boolean;

  constructor({ name, route, component, icon, isMain, hidden }: Route) {
    this.name = name;
    this.route = route;
    this.component = component;
    this.icon = icon;
    this.isMain = isMain;
    this.hidden = hidden;
  }
}
