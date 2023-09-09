"use client";

import { useAddress } from "@/hooks/use-address";
import { IAddress } from "@/stores/addresses/type";

interface MenuItemProps {
  address: IAddress;
  onClick?: Function;
}

export function MenuItem({ address, onClick }: MenuItemProps) {
  const { currentAddress, onChangeAddress } = useAddress();

  return (
    <button
      className="flex flex-col w-full py-2 px-6 gap-1 rounded-xl data-[active=true]:bg-slate-200/50 hover:bg-slate-200/50 transition"
      data-active={currentAddress && currentAddress.uuid === address.uuid}
      data-uuid={address.uuid}
      onClick={() => {
        onChangeAddress(address);
        if(onClick) {
          onClick();
        }
      }}
    >
      <h1 className="text-base font-bold text-slate-700">
        {address.description}
      </h1>
      <span className="text-xs font-normal text-start text-slate-500">
        {`${address.streetName}, ${address.streetNumber}, ${address.neighbourhood},
        ${address.city} - ${address.state}`}
      </span>
    </button>
  );
}
