import { Map } from "@/components/map";

export default async function Home() {
  return (
    <div className="flex items-center justify-center bg-slate-200 h-full rounded-2xl overflow-hidden">
      <Map />
    </div>
  );
}
