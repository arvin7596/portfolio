import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("Children are not in provider");
  return context;
}
