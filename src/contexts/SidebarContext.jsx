import { createContext, useState } from "react";

export const SidebarContext = createContext();

export function SidebarContextProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState();
  function toggleSidebar() {
    setIsSidebarOpen((pre) => !pre);
  }
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
