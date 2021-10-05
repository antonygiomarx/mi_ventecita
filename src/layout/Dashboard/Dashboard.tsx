import { Layout } from "antd";

export const DashboardComponent = (): JSX.Element => {
  const { Content } = Layout;
  return (
    <Layout>
      <Content>
        <h1>Ventas del mes</h1>
      </Content>
    </Layout>
  );
};
