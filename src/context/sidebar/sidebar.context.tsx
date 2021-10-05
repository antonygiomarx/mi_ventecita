import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { Children } from "@interfaces/children";

interface SidebarContextModel {
  collapsed: boolean;
  setCollapsed?: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<SidebarContextModel>({
  collapsed: true,
});

export const useSidebarContext = (): SidebarContextModel =>
  useContext(SidebarContext);

export const SidebarProvider = ({ children }: Children): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};
