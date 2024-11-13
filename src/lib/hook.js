import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContextProvider";

export const useItemsContext = () => {
  const context = useContext(ItemsContext)
  if (!context) throw new Error('useItemsContext must be used within a ItemsContextProvider')
  return context
};