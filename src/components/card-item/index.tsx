import { IAddress } from "@/stores/addresses/type";
import { Star } from "lucide-react";

interface CardItemProps {
  address: IAddress;
}

export function CardItem({ address }: CardItemProps) {
  return (
    <div className="max-w-[660px] min-w-[300px] group min-h-[160px] shadow-xl shadow-shadow rounded-lg  overflow-hidden">
      <div className="relative h-[160px] bg-white/90 backdrop-blur-2xl">
        <div className="w-full h-20 bg-slate-50/70 backdrop-blur-2xl flex flex-col p-4">
          <h1 className="text-base font-bold text-slate-700">
            {address.description}
          </h1>
          <div className="flex flex-row gap-2 items-center mt-1">
            <p className="text-xs text-slate-700">5,0</p>
            <div className="flex flex-row gap-1">
              <Star size={18} className="text-yellow-400" />
              <Star size={18} className="text-yellow-400" />
              <Star size={18} className="text-yellow-400" />
              <Star size={18} className="text-yellow-400" />
              <Star size={18} className="text-yellow-400" />
            </div>
          </div>
        </div>
        <div className="w-full h-20  p-4">
          <span className="text-xs font-normal text-start text-slate-600">
            {`${address.streetName}, ${address.streetNumber}, ${address.neighbourhood}, ${address.city} - ${address.state}`}
          </span>
        </div>
      </div>
    </div>
  );
}
