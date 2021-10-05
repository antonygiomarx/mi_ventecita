import { Header } from "antd/lib/layout/layout";

import { ProfileMenu } from "@components/ProfileMenu/ProfileMenu";

export const HeaderComponent = (): JSX.Element => (
  <Header className="header">
    <div className="logo" />
    <ProfileMenu />
  </Header>
);
