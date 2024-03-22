import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-sol md:flex-row md-overflow-hidden">
        <div className="flex-shrink-0 flex-grow-0 w-64 bg-gray-800">
            <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
        </div>
    </div>
  );
}