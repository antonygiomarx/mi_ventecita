import { AuthState } from "./auth-state.model";
import { ShopState } from "./shop-state.model";
import { StoreState } from "./store-state.model";

export interface RootState {
  auth: AuthState;
  store: StoreState;
  shop: ShopState;
}
