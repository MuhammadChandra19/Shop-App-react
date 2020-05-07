import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
import { ILayoutConfigProps } from "@app/domain/layout/interfaces";

export interface RouteItem {
  key: string;
  text?: string;
  url: string;
  component: string;
  icon?: React.ForwardRefExoticComponent<AntdIconProps & React.RefAttributes<HTMLSpanElement>>;
  isOnBottomNavbar: boolean;
  layoutConfig: ILayoutConfigProps;
}