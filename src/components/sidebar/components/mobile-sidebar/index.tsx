"use client";

import { CardItem } from "@/components/card-item";
import { useAddress } from "@/hooks/use-address";
import { IAddress } from "@/stores/addresses/type";
import { useEffect } from "react";
import Carousel, { DotProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface SidebarProps {
  addresses: IAddress[];
}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function MobileSidebar({ addresses }: SidebarProps) {
  const { onChangeAddress } = useAddress();

  const handleChangeSlide = (previousSlide: number, address: IAddress) => {
    onChangeAddress(address);
  };

  useEffect(() => {
    if (addresses && addresses.length > 0) {
      setTimeout(() => {
        onChangeAddress(addresses[0]);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);

  const CustomDot = ({ index, active, onClick, carouselState }: DotProps) => {
    return (
      <li onClick={onClick}>
        <div className="w-4 h-2 transition-all rounded-full mb-2 bg-slate-400 data-[active=true]:w-8 data-[active=true]:bg-slate-700" data-active={active} />
      </li>
    );
  };

  return (
    <div className="fixed z-20 bottom-0 lg:hidden w-full mt-12">
      {addresses && (
        <Carousel
          responsive={responsive}
          ssr
          className="pb-8"
          showDots
          customDot={<CustomDot />}
          dotListClass="gap-2"
          arrows={false}
          afterChange={(previousSlide) =>
            handleChangeSlide(previousSlide, addresses[previousSlide + 1])
          }
        >
          {addresses.map((address) => (
            <div key={address.uuid} className="mx-6">
              <CardItem address={address} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}
