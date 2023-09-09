import { LogoContent } from "@/components/logo-content";
import { MenuItem } from "@/components/menu-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IAddress } from "@/stores/addresses/type";

interface SidebarProps {
  addresses: IAddress[];
}

export function Sidebar({ addresses }: SidebarProps) {
  return (
    <aside
      id="desktopSidebar"
      className="z-30 flex-shrink-0 hidden w-80 overflow-y-auto lg:block"
    >
      <div className="h-screen overflow-hidden bg-background dark:bg-sidebar py-4 relative">
        <div className="px-6 py-6">
          <div className="w-full flex items-center justify-center">
            <LogoContent />
          </div>
        </div>
        <ScrollArea className="h-[700px] lg:h-[600px] w-full px-6 py-6">
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
        <div className="w-full py-2 px-4 text-[10px] absolute bottom-0 text-center text-slate-400 font-thin">
          <a href="https://github.com/ilannildo" target="_blank">
            Powered by {" "}
            <b className="font-bold text-slate-900">Ilannildo V Cruz</b> - Full
            Stack Developer
          </a>
        </div>
      </div>
    </aside>
  );
}
