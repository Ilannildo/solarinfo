import { Map } from "@/components/map";
import { Sidebar } from "@/components/sidebar/components/desktop-sidebar";
import { apiUrl } from "@/services/api";
import { IAddress } from "@/stores/addresses/type";

export default async function Page() {
  const response = await fetch(`${apiUrl}/addresses`);
  const addresses = await response.json() as IAddress[];

  return (
    <div className="flex w-full h-screen bg-slate-50">
      <Sidebar addresses={addresses} />
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full lg:overflow-y-auto">
          <div className="relative w-full h-screen bg-slate-50 p-3 ">
            <div className="flex items-center justify-center bg-slate-200 h-full rounded-2xl overflow-hidden">
              <Map addresses={addresses} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
