import { type ReactElement } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteNav from "./SiteNav";

export default function Layout({ children }: { children: ReactElement }) {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<SiteNav />
				<SidebarInset>
					<main className="flex-1 p-8">{children}</main>
				</SidebarInset>
			</SidebarProvider>
		</TooltipProvider>
	);
}
