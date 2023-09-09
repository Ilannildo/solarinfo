"use client";

import { AddressProvider } from "@/contexts/address-context";
import { ReactNode } from "react";

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return <AddressProvider>{children}</AddressProvider>;
};
