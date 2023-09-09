import { LogoContent } from "@/components/logo-content";
import { MenuItem } from "@/components/menu-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import { apiUrl } from "@/services/api";
import { IAddress } from "@/stores/addresses/type";

export async function SidebarContent() {
  const response = await fetch(`${apiUrl}/addresses`);
  const addresses = (await response.json()) as IAddress[];

  return (
    <div className="h-screen overflow-hidden bg-background dark:bg-sidebar py-4">
      <div className="px-6 py-6">
        <div className="w-full flex items-center justify-center">
          <LogoContent />
        </div>
      </div>
      <ScrollArea className="h-full w-full px-6 py-6" >
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
