import { LogoContent } from "@/components/logo-content";
import { MenuItem } from "@/components/menu-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IAddress } from "@/stores/addresses/type";

interface SidebarProps {
  addresses: IAddress[];
}

export function MobileSidebar({ addresses }: SidebarProps) {
  return (
    <div className="fixed z-20 bottom-0 lg:hidden bg-slate-50 transition rounded-tr-2xl rounded-tl-2xl shadow-2xl">
      <div className="w-full flex items-center justify-center py-2">
        <LogoContent />
      </div>
      <ScrollArea className="w-full h-52 px-3 py-3">
        {addresses && (
          <ul className="space-y-6 font-medium">
            {addresses.map((address) => (
              <li key={address.uuid}>
                <MenuItem address={address} />
              </li>
            ))}
          </ul>
        )}
      </ScrollArea>
    </div>
  );
}
