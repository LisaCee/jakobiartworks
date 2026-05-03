import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteNav from "./SiteNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<SiteNav />
				<SidebarInset className="bg-background">
					<main className="flex-1 p-8">
						<Outlet />
					</main>
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
