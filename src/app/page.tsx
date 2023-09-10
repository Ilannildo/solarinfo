import { LogoContent } from "@/components/logo-content";
import { Map } from "@/components/map";
import { Sidebar } from "@/components/sidebar/components/desktop-sidebar";
import { MobileSidebar } from "@/components/sidebar/components/mobile-sidebar";
import { apiUrl } from "@/services/api";
import { IAddress } from "@/stores/addresses/type";

export default async function Page() {
  const response = await fetch(`${apiUrl}/addresses`);
  const addresses = (await response.json()) as IAddress[];

  return (
    <div className="flex w-full h-screen flex-col lg:flex-row bg-slate-50 relative">
      <Sidebar addresses={addresses} />
      <MobileSidebar addresses={addresses} />
      <div className="relative w-full h-screen bg-slate-50 lg:p-3">
        <header className="lg:hidden z-10 flex items-center justify-center w-full py-2 bg-white/20 backdrop-blur-lg">
          <LogoContent />
        </header>
        <div className="flex items-center justify-center bg-slate-200 h-full lg:rounded-2xl overflow-hidden">
          <Map addresses={addresses} />
        </div>
      </div>
    </div>
  );
}
