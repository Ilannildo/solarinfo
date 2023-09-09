"use client";

import { IAddress } from "@/stores/addresses/type";
import React, { createContext, useState } from "react";

type AddressContextProps = {
  currentAddress: IAddress | null;
  zoom: number;
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
  const [zoom, setZoom] = useState<number>(14);

  const onChangeAddress = (address: IAddress | null) => {
    if(address) {
      setZoom(16);
      setTimeout(() => {
        setCurrentAddress(address);
      }, 500)
      setTimeout(() => {
        setZoom(18);
      }, 1500)
    } else {
      setZoom(14);
      setCurrentAddress(address);
    }    
  };

  return (
    <AddressContext.Provider
      value={{
        onChangeAddress,
        currentAddress,
        zoom,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
