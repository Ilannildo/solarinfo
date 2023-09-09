"use client";

import { LogoContent } from "@/components/logo-content";
import { MenuItem } from "@/components/menu-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAddress } from "@/hooks/use-address";
import { IAddress } from "@/stores/addresses/type";
import { useEffect, useRef } from "react";

interface SidebarProps {
  addresses: IAddress[];
}

export function MobileSidebar({ addresses }: SidebarProps) {
  const { currentAddress } = useAddress();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!currentAddress) {
      return;
    }

    if (scrollRef.current) {
      const selectedHourButton = scrollRef.current.querySelector(
        `[data-uuid="${currentAddress.uuid}"]`
      ) as HTMLButtonElement | null;

      if (selectedHourButton) {
        selectedHourButton.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [currentAddress]);
  
  return (
    <div className="fixed z-20 bottom-0 lg:hidden bg-slate-50 transition rounded-tr-2xl rounded-tl-2xl shadow-2xl">
      <div className="w-full flex items-center justify-center py-2">
        <LogoContent />
      </div>
      <ScrollArea ref={scrollRef} className="w-full h-52 px-3 py-3">
        {addresses && (
          <ul className="space-y-6 font-medium">
            {addresses.map((address) => (
              <li key={address.uuid}>
                <MenuItem
                  address={address}
                  onClick={() => {
                    if (scrollRef.current) {
                      const selectedHourButton =
                        scrollRef.current.querySelector(
                          `[data-uuid="${address.uuid}"]`
                        ) as HTMLButtonElement | null;

                      if (selectedHourButton) {
                        selectedHourButton.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </ScrollArea>
    </div>
  );
}
