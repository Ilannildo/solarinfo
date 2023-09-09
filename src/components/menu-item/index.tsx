"use client";

import { IAddress } from "@/stores/addresses/type";
import { useState } from "react";

interface MenuItemProps {
  address: IAddress;
}

export function MenuItem({ address }: MenuItemProps) {
  const [active, setActive] = useState(false);
  return (
    <button
      className="flex flex-col w-full py-2 px-6 gap-1 rounded-xl data-[active=true]:bg-slate-200/50 transition"
      data-active={active}
      onClick={() => {
        setActive((old) => !old);
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
