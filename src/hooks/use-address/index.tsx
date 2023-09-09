import { AddressContext } from "@/contexts/address-context";
import { useContext } from "react";

export const useAddress = () => {
  const context = useContext(AddressContext);
  return context;
};
