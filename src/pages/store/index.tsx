import Head from "next/head";

import { Main } from "@layout/Main/Main";
import { Store as StoreComponent } from "@layout/Store/Store";

const Store = (): JSX.Element => (
  <>
    <Head>
      <title>Inventario - Mi Ventecita</title>
    </Head>
    <Main>
      <StoreComponent isSelectable={false} />
    </Main>
  </>
);

export default Store;
