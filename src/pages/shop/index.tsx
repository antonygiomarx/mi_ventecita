import { Main } from "../../layout/Main/Main";
import { Store } from "../../layout/Store/Store";

const Shop = (): JSX.Element => {
  return (
    <Main>
      <Store isSelectable />
    </Main>
  );
};

export default Shop;
