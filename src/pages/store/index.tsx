import { Main } from "../../layout/Main/Main";
import { Store as StoreComponent } from "../../layout/Store/Store";

const Store = (): JSX.Element => {
  return (
    <Main>
      <StoreComponent isSelectable={false} />
    </Main>
  );
};

export default Store;
