import { SidebarContent } from "@/components/sidebar/components/sidebar-content";

function DesktopSidebar() {
  return (
    <aside
      id="desktopSidebar"
      className="z-30 flex-shrink-0 hidden w-80 overflow-y-auto lg:block"
    >
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
