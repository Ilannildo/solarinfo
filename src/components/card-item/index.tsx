import { IAddress } from "@/stores/addresses/type";

interface CardItemProps {
  address: IAddress;
}

export function CardItem({ address }: CardItemProps) {
  return (
    <div className="max-w-[660px] min-w-[300px] group min-h-[100px] shadow-xl shadow-shadow rounded-lg bg-slate-50 overflow-hidden">
      <div className="relative h-[100px]">
        <h1 className="text-base font-bold text-slate-700">
          {address.description}
        </h1>
        <span className="text-xs font-normal text-start text-slate-500">
          {`${address.streetName}, ${address.streetNumber}, ${address.neighbourhood},
        ${address.city} - ${address.state}`}
        </span>
      </div>
    </div>
  );
}
