import Head from "next/head";

import { DashboardComponent } from "@layout/Dashboard/Dashboard";
import { Main } from "@layout/Main/Main";

const Dashboard = (): JSX.Element => (
  <>
    <Head>
      <title>Dashboard - Mi Ventecita</title>
    </Head>

    <Main>
      <DashboardComponent />
    </Main>
  </>
);

export default Dashboard;
