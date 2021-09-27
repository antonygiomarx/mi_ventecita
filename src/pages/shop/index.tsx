import Head from "next/head";

import { Main } from "@layout/Main/Main";
import { Store } from "@layout/Store/Store";

const Shop = (): JSX.Element => (
  <>
    <Head>
      <title>Tienda - Mi Ventecita</title>
    </Head>
    <Main>
      <Store isSelectable />
    </Main>
  </>
);

export default Shop;
