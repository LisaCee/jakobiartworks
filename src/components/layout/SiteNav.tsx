import { type ReactElement } from "react";
import { Sun, Moon, ScanHeart, SquareUserRound } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarHeader,
	SidebarFooter,
	SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
	{ href: "/", title: "Home", icon: ScanHeart },
	{ href: "/about", title: "About", icon: SquareUserRound },
	//   { to: '/contact', label: 'Contact' },
];

export default function SiteNav(): ReactElement {
	const { dark, updateTheme } = useTheme();

	return (
		<Sidebar collapsible="icon">
			<SidebarHeader className="flex flex-row items-center justify-between ">
				{/* expanded */}
				<div className="group-data-[collapsible=icon]:hidden flex items-center justify-between w-full">
					<span className="font-semibold">Jakobi Art Works</span>
					<SidebarTrigger />
				</div>

				{/* collapsed */}
				<div className="hidden group-data-[collapsible=icon]:flex flex-col items-center gap-1 py-2">
					<div className="flex flex-col items-center text-xs font-semibold tracking-widest text-foreground">
						<span>J</span>
						<span>A</span>
						<span>W</span>
					</div>
					<SidebarTrigger />
				</div>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{navItems.map((item) => (
								<SidebarMenuItem key={item.href}>
									<SidebarMenuButton
										asChild
										tooltip={item.title}
										className="flex flex-row justify-between"
									>
										<a href={item.href}>
											<span>{item.title}</span>
											<item.icon />
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<div>
					<a href="#">Instagram</a>
					<button onClick={updateTheme}>
						{dark ? <Sun size={16} /> : <Moon size={16} />}
					</button>
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
