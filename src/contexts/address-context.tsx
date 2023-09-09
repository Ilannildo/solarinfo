"use client";

import { IAddress } from "@/stores/addresses/type";
import React, { createContext, useState } from "react";

type AddressContextProps = {
  currentAddress: IAddress | null;
  onChangeAddress: (address: IAddress | null) => void;
};

export const AddressContext = createContext<AddressContextProps>(
  {} as AddressContextProps
);

type AddressProviderProps = {
  children: React.ReactNode;
};

export const AddressProvider: React.FC<AddressProviderProps> = ({
  children,
}) => {
  const [currentAddress, setCurrentAddress] = useState<IAddress | null>(null);

  const onChangeAddress = (address: IAddress | null) => {
    setCurrentAddress(address);
  };

  return (
    <AddressContext.Provider
      value={{
        onChangeAddress,
        currentAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
